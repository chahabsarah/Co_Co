import { Component } from '@angular/core';
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Ride} from "../../../Models_Front/Ride";
import {Router} from "@angular/router";
//import { Input, Ripple, initMDB } from "mdb-ui-kit";
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {

  //initMDB({ Input, Ripple });
  startLocation!: string;
  arrivalLocation: string = '';

  constructor(private dataService: RideServiceService,private router: Router) {}

  searchRide(event: Event) {
    event.preventDefault();
    console.log(this.startLocation); // Vérifiez que la valeur de startLocation est correcte

    // Appel du service pour rechercher les trajets par emplacement de départ
    this.dataService.getRidesByStartLocation(this.startLocation).subscribe(
      (rides: Ride[]) => {
        // Traitement des trajets récupérés
        console.log('Trajets récupérés :', rides);

        // Mise à jour des résultats de la recherche dans le service
        this.dataService.updateSearchResults(rides);
        console.log("ahla",this.dataService.ridese);
        this.router.navigate(['/search']);
      },
      (error) => {
        // Gestion des erreurs
        console.error('Erreur lors de la récupération des trajets :', error);
      }
    );
  }


}
