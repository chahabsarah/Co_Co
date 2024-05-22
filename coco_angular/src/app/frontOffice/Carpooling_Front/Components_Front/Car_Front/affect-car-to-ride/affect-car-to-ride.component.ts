import { Component } from '@angular/core';
import { CarServiceService } from '../../../Services/CarService/car-service.service';
import {NgForm} from "@angular/forms";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Ride} from "../../../Models_Front/Ride";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-affect-car-to-ride',
  templateUrl: './affect-car-to-ride.component.html',
  styleUrls: ['./affect-car-to-ride.component.scss']
})
export class AffectCarToRideComponent  {
  carID!: number;
  rideID!: number;
  rides!: Ride[];
  id!:number;
  constructor(private route: ActivatedRoute,private carService:CarServiceService,private rideService:RideServiceService) { }
  affect(form: NgForm) {
    this.carService.affectCarToRide(this.carID, this.rideID).subscribe(
      response => {
        // Traiter la réponse en cas de succès
        console.log(response);
      },
      error => {
        // Traiter l'erreur en cas d'échec
        console.error(error);
      }
    );
  }

 /* showRides() {
    this.rideService.getRidesList().subscribe(
      (response: any) => {
        this.rides = response;
      },
      error => {
        console.error('There was an error retrieving the rides:', error);
      }
    );
  }*/
  showRides() {
    this.rideService.getRidesList().subscribe(
      (response: any) => {
        this.rides = response;
      },
      error => {
        console.error('There was an error retrieving the rides:', error);
      }
    );
  }

  affectCar(rideID: number) {
    console.log("hell"+rideID);
    this.id = this.route.snapshot.params['carID'];
    console.log("hello"+this.id);
    this.carService.affectCarToRide(this.id, rideID).subscribe(
      response => {
        console.log(response);
      },
      error => {
        // Traiter l'erreur en cas d'échec
        console.error(error);
      }
    );
  }
}
