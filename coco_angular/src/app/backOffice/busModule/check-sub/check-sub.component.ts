import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscription } from 'src/app/frontOffice/busManagment/model/subscription';
import { SubserviceService } from 'src/app/frontOffice/busManagment/service/subservice.service';
import { TripStopServiceService } from '../service/trip-stop-service.service';
import { EmailService } from 'src/app/frontOffice/busManagment/service/email.service';

@Component({
  selector: 'app-check-sub',
  templateUrl: './check-sub.component.html',
  styleUrls: ['./check-sub.component.scss']
})
export class CheckSubComponent  implements OnInit{
  listSub: subscription[] = [];
  search: number = 0;
  email= 'achref.ghribi@esprit.tn';
  subject= 'Expired Sub';
  corp= 'We regret to inform you that your subscription has expired. We hope you have enjoyed the benefits of our service during your subscription period. ';

  constructor(
    private subservice: SubserviceService,
    private eservice: EmailService,
    private http: HttpClient,
    private ac: ActivatedRoute,
    private router: Router,
    private tripStopService: TripStopServiceService ) {}

  ngOnInit() {
    this.loadSubs();
  }

  loadSubs() {
    this.subservice.getAllSubscription().subscribe({
      next: (data: subscription[]) => {
        this.listSub = data;
      },
      error: (error) => console.error(error),
      complete: () => console.log('Subs loaded successfully')
    });
  }

  selectTab(subscriptionId: number) {
    this.search = subscriptionId;
  }

  updateRemainingTrips(subscription: subscription) {
    if (subscription.remainingTrips > 0) {
      const newRemainingTrips = subscription.remainingTrips - 1;
      if (newRemainingTrips === 0) {
        // If remaining trips are 0, update status to EXPIRED
        this.subservice.updateSubscriptionStatus(subscription.id, 'EXPIRED').subscribe(
          () => {
            console.log('Subscription status updated to EXPIRED.');
            alert('Subscription status updated to EXPIRED.');
            // Update the remaining trips in the local list
            subscription.remainingTrips = newRemainingTrips;
            this.sendEmail();


          },
          (error) => {
            console.error('Error updating subscription status:', error);
          }
        );
      } else {
        // If remaining trips are not 0, update remaining trips
        this.subservice.updateremainingTrips(subscription.id, newRemainingTrips).subscribe({
          next: () => {
            console.log('Remaining trips updated successfully.');
            // Update the remaining trips in the local list
            subscription.remainingTrips = newRemainingTrips;
          },
          error: (error) => console.error('Error updating remaining trips:', error)
        });
      }
    } else {
      console.log('Remaining trips are already zero.');
    }
  }


  sendEmail() {
    this.eservice.sendEmail(this.email, this.subject, this.corp).subscribe(
      response => {
        console.log('Email envoyé avec succès :', response);
        alert('Email envoyé avec succès ');

      },
      error => {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        // Gérez l'erreur
      }
    );
  }
}

