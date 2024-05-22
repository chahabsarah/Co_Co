import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { CustomerDataService } from '../accommodationModule/Services/customer-data.service';
import { CustomerData } from '../models/CustomerDataModel';
import { User } from '../models/UserModel';
import { Room } from '../models/accomodationModel';

@Component({
  selector: 'app-accpayment',
  templateUrl: './accpayment.component.html',
  styleUrls: ['./accpayment.component.scss']
})
export class AccpaymentComponent {
  customerId!: string;
  amount: number = 0; // Initialize amount to 0
  paymentSuccessful: boolean = false;
  paymentFailed: boolean = false;
  amountTooSmall: boolean = false;
  customerData: CustomerData = new CustomerData();
  bookingPrice: number=60;
  solds: number = 0;
  insufficientBalance: boolean = false;

  currentUser!: User;
  VisitDate !: Room['VisitDate']
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private customerDataService: CustomerDataService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerId'];
      this.amount = parseInt(params['rent']);
     

      console.log("Customer ID:", this.customerId);
      console.log("Room Rent:", this.amount);
    });
  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.customerData.name = this.currentUser.username;
      this.customerData.email = this.currentUser.email;

      this.userService.findCurrentUserSoldByIdUser(this.currentUser.id)
        .subscribe(sold => {
          this.solds = sold.accountSold;
        });
    });
  }

  initiatePayment(): void {
    if (this.amount < 50) {
      this.amountTooSmall = true;
      return;
    }

    if (this.solds >= this.bookingPrice) {
      this.customerDataService.initiatePayment(this.customerId, this.amount)
        .subscribe(
          (response: any) => {
            if (response === 'Payment successful' || (response && response.success === true)) {
              console.log('Payment successful:', response);
              this.paymentSuccessful = true;
              this.solds -= this.bookingPrice;

              this.userService.updateSoldForUser(this.currentUser.id, this.solds)
                .subscribe(updatedSold => {
                  console.log('Sold updated:', updatedSold);
                });
            } else {
              console.error('Unexpected response:', response);
            }
          },
          error => {
            console.error('Payment failed:', error);
            this.paymentFailed = true;
          }
        );
    } else {
      this.insufficientBalance = true;
    }
  }

  generatePDF() {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              [{ text: 'Payment details', colSpan: 2, style: 'header' }, ''],
              ['Booking price', { text: this.bookingPrice, style: 'cell' }],
              ['Username', { text: this.currentUser.username, style: 'cell' }],
              ['Email', { text: this.currentUser.email, style: 'cell' }],

            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          alignment: 'center',
          fillColor: '#3f51b5',
          color: '#ffffff',
          margin: [0, 0, 0, 20]
        },
        cell: {
          fontSize: 16,
          bold: false,
          fillColor: '#f5f5f5',
          margin: [0, 5, 0, 5]
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
