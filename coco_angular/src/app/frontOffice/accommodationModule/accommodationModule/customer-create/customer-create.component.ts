import { Component, Inject, OnInit } from '@angular/core';
import { CustomerData } from '../../models/CustomerDataModel';
import { CustomerDataService } from '../Services/customer-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../models/accomodationModel';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import { User } from '../../models/UserModel';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  rent!: Room['rent'];
  customerData: CustomerData = new CustomerData();
  submitted = false;
  todayDate: string;

  currentUser!: User;
  VisitDate !: Room['VisitDate']
  paymentMethods = [
    { name: 'Visa card', id: 'pm_card_visa',imageUrl: './assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'Mastercard', id: 'pm_card_mastercard',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'American Express', id: 'pm_card_amex',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'Discover', id: 'pm_card_discover',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'JCB', id: 'pm_card_jcb',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'Diners Club', id: 'pm_card_diners',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    { name: 'UnionPay', id: 'pm_card_unionpay',imageUrl: 'assets/frontOffice/img/stripeimages/visa.jpg' },
    {
      name: 'Mastercard e-Dinar Tunisian',
      id: 'pm_card_edinar_tunisian',
      imageUrl: './assets/frontOffice/img/stripeimages/visa.jpg',
    },
  ];


  constructor(

    private userService: UserService,
     private route: ActivatedRoute,
    private customerDataService: CustomerDataService,
    private router: Router) {
      const today = new Date();
      const year = today.getFullYear();
      const month = ('0' + (today.getMonth() + 1)).slice(-2);
      const day = ('0' + today.getDate()).slice(-2);
      this.todayDate = year + '-' + month + '-' + day;


     }
  ngOnInit(): void {
    this.getCurrentUser();

    this.route.queryParams.subscribe(params => {
      this.rent = params['rent'];
      
      console.log("room rent", this.rent);
    });
    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.customerData.name = user.username;
        this.customerData.email = user.email;
        console.log("userDate",this.customerData)
      },
      error => {
        console.error('Error fetching current user data:', error);
      }
    );
  }
  get formattedCardNumber() {
    return this.customerData.cardNumber.replace(/\d{4}/g, '$& ').trim();
  }
  getCurrentUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        console.log('Utilisateur courant:', this.currentUser);
        this.customerData.name = this.currentUser.username;
        this.customerData.email = this.currentUser.email;

      });
  }

  createCustomer(): void {
    const data = {
      name: this.currentUser.username,
      email: this.currentUser.email,
      paymentMethodId: this.customerData.paymentMethodId,
    };


    this.customerDataService.createCustomer(data as CustomerData)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          // this.router.navigate(['/roomPayment', { customerId: response.customerId }]); // Assuming the response contains the customer ID
          this.router.navigate(['/roomPayment'], { queryParams: { customerId: response.customerId, rent: this.rent } }); // Passing room rent along with customer ID

        },
        error => {
          console.log(error);
        });

  }

  newCustomer(): void {
    this.submitted = false;
    this.customerData = new CustomerData();
  }
}
