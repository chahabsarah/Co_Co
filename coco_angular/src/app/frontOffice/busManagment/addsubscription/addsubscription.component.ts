import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer le Router pour la navigation
import { subscription } from '../model/subscription';
import { SubserviceService } from '../service/subservice.service';
import { QrCodeServiceService } from '../service/qr-code-service.service';

@Component({
  selector: 'app-addsubscription',
  templateUrl: './addsubscription.component.html',
  styleUrls: ['./addsubscription.component.scss']
})
export class AddsubscriptionComponent {
  subscription: subscription = new subscription();
  subscriptionAdded: boolean = false;
  qrCodeGenerated: boolean = false;

  constructor(
    private router: Router, // Injecter le Router
    private subservice: SubserviceService,
    private qrservice: QrCodeServiceService
  ) {}

  addSubscription(): void {
    this.subservice.addSubscription(1, this.subscription).subscribe(
      (data) => {
        console.log('Subscription added successfully:', data);
        this.subscriptionAdded = true;
        // Naviguer vers la page de l'abonnement après l'ajout réussi
        this.router.navigate(['/sub']); // Assurez-vous que '/subscription' est le chemin correct vers la page de l'abonnement
      },
      (error) => {
        console.error('Error adding subscription:', error);
        // Afficher une alerte en cas d'erreur
        alert('Error adding subscription: ' + error); // Vous pouvez personnaliser le message d'alerte selon vos besoins
      }
    );
  }
}
