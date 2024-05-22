import { Component, OnInit } from '@angular/core';
import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StripeComponent } from '../stripe/stripe.component';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  listSub: subscription[] = [];
  stripeComponent: StripeComponent;
  userId!: number;

  constructor(
    private subservice: SubserviceService,
    private qrservice: QrCodeServiceService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private userService :UserService,

  ) {
    this.stripeComponent = new StripeComponent(route ,userService,http); // Create an instance of StripeComponent with dependencies
  }

  ngOnInit() {
    // Assuming you have the user ID available
    this.userId = 1; // Replace 123 with the actual user ID
    this.loadSubs(this.userId);
  }

  loadSubs(userId: number) {
    this.subservice.getDetailsub(userId).subscribe({
      next: (data: subscription) => {
        this.listSub = [data]; // Assuming getDetailsub returns a single subscription
      },
      error: (error) => console.error(error),
      complete: () => console.log('Subs loaded successfully')
    });
  }


  generateQrCode(subscription: subscription): void {
    if (subscription.status === 'ACTIVE') {
      this.qrservice.generateQrCode(subscription.qrCodeData).subscribe(
        (qrCodeBlob: Blob) => {
          const reader = new FileReader();
          reader.onload = (event: any) => {
            subscription.qrCodeImageUrl = event.target.result;
          };
          reader.readAsDataURL(qrCodeBlob);
        },
        (error) => {
          console.error('Error generating QR code:', error);
          alert('Error generating QR code: ' + error); // Alert error message
        }
      );
    } else {
      alert('Subscription is not ACTIVE. Cannot generate QR code.'); // Alert subscription status
    }
  }

  paySubscription(subscription: subscription): void {
    if (subscription.status === 'EXPIRED') {
      this.stripeComponent.rent = subscription.subscriptionPrice * 100;


      // Create a promise to handle the payment process
      const paymentPromise = new Promise<boolean>((resolve) => {
        // Call the payment method and resolve the promise with the payment result
        this.stripeComponent.pay();
        resolve(true); // Assuming payment is always successful for simplicity
      });

      // After the payment is resolved (assuming it's always successful)
      paymentPromise.then((paymentSuccessful: boolean) => {
        if (paymentSuccessful) {
          // Update the subscription status to 'ACTIVE'
          this.subservice.updateSubscriptionStatus(subscription.id, 'ACTIVE').subscribe(
            () => {
              alert('Payment successful! Subscription status updated to ACTIVE.');
            },
            (error) => {
              console.error('Error updating subscription status:', error);
              alert('Payment successful, but failed to update subscription status.');
            }
          );
        } else {
          alert('Payment failed.');
        }
      });
    } else {
      alert('Payment failed: Subscription is not expired.');
    }
  }
  removeSubscription(subscriptionId: number): void {
    this.subservice.removeSub(subscriptionId).subscribe(
      () => {
        // Subscription removed successfully, update the list
        this.loadSubs(this.userId);
      },
      (error) => {
        console.error('Error removing subscription:', error);
        alert('Error removing subscription: ' + error);
      }
    );
  }
}
