import { Component } from '@angular/core';
import {Ride} from "../../../../Models_Front/Ride";
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";

@Component({
  selector: 'app-display-cardd',
  templateUrl: './display-cardd.component.html',
  styleUrls: ['./display-cardd.component.scss']
})
export class DisplayCarddComponent {
  avoidTolls: boolean = false;
  price: number = 0; // Vous pouvez initialiser à la valeur par défaut si nécessaire

  /* onSubmit() {
     // Utilisez les valeurs des propriétés pour effectuer d'autres actions ou soumettre le formulaire
     console.log('Avoid Tolls:', this.avoidTolls);
     console.log('Prix par passager (€):', this.price);
   }*/
  constructor(private formDataService: RideServiceService) { }

  onNext() {
    /* this.formDataService.setFormData({
       avoidTolls: this.avoidTolls,
       price: this.price
     }, 4);*/
  }

  showFormData() {
    this.formDataService.setFormData({
      avoidTolls: this.avoidTolls,
      price: this.price
    }, 4);
  }
}
