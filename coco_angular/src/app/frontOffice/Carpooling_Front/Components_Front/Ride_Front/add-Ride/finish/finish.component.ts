import { Component } from '@angular/core';
import {Ride} from "../../../../Models_Front/Ride";
import { forkJoin } from 'rxjs';
//import {Time} from "@angular/common";
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";
import {Router} from "@angular/router";
//import {HttpClient} from "@angular/common/http";
//import {Time} from "../Time";
import {Time} from "../Time";
//import { HttpHeaders } from '@angular/common/http';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Car} from "../../../../Models_Front/Car";
import {CarServiceService} from "../../../../Services/CarService/car-service.service";
import {Image} from "../../../../Models_Front/Image";
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent {
  ride: Ride = new Ride();
  amir!:number;
  date!: string;
  time!: Time;
  preference!: string;
  avoidTolls!: boolean;
  price!: number;
  startlocation!: string;
  arrivalLocation!: string;
  available_seats!: string;
  vehicule_is_smoke!: string;
  model!: string;
  comfort!: boolean;
  // formData: any;
  formData: any = {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {}
  };
  constructor(private service: RideServiceService,private carservice: CarServiceService,private router:Router,private http:HttpClient) { }
  ngOnInit(): void {

    this.formData = this.service.getFormData();

    console.log(this.formData.step3.time);

  }
  showAlert = false;

  saveData() {
    /* this.showAlert = false;
     const formData = this.service.getFormData();

     const ride: Ride = {

       startLocation: formData.step1.departureAddress,
       arrivalAddress: formData.step1.arrivalAddress,
       placeDisponible: formData.step2.availableSeats,
       smoking_Vehicle: formData.step2.isSmoker,
       departureDate: formData.step3.date,
       time: formData.step3.time,
       preference: formData.step3.preference,
       avoidTolls: formData.step4.avoidTolls,
       price: formData.step4.price
     };
     const headers = new HttpHeaders().set('Content-Type', 'application/json');
     const body = JSON.stringify(ride);
     console.log('Request body:', body);

     this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
       .subscribe(
         response => {
           console.log('Success:', response);
           this.showAlert = true;
         },
         error => {
           console.error('Error:', error);

         }
       );*/
    this.showAlert = false;
    const formData = this.service.getFormData();

    // Convert the departureDate property from a string to a Date object
    // const departureDate: Date = new Date(formData.step3.departureDate);
    // Convert the time property from an object with hours and minutes properties to a Time object
    //const time: Time = formData.step3.time;
    const maDate: Date = new Date(formData.step3.departureDate); // Votre date de type Date existante
    const localeDate: string = maDate.toLocaleDateString();

    // let amir: Time | null = null;
    if (formData.step3.time) {
      const timeParts = formData.step3.time.split(':');
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);

      // Créer un objet Time à partir des parties de l'heure
      // this.time = {hours: hours, minutes: minutes};
      //  amir = { hours: hours, minutes: minutes };
    }

// Affecter la variable time à partir de formData.step3.time

    // Create a new instance of Ride with the converted data
    const time = formData.step3.time ? new Time(formData.step3.time.hours, formData.step3.time.minutes) : null;

    const ride: Ride = {
      rideID:formData.rideID,
      startLocation: formData.step1.departureAddress,
      arrivalAddress: formData.step1.arrivalAddress,
      placeDisponible: formData.step2.availableSeats,
      smoking_Vehicle: formData.step2.isSmoker,
     // departureDate: maDate,
      departureDate:formData.step3.departureDate,
      time: formData.step3.date && time,
      preference: formData.step3.preference,
      avoidTolls: formData.step4.avoidTolls,
      price: formData.step4.price

    };


    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ride);
    console.log('Request body:', body);

    this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
        },
        error => {
          console.error('Error:', error);
        }
      );
  }
  saveRideFromFormData() {
    // Récupérer les données depuis formData
    const formData = this.service.getFormData();

    // Créer une nouvelle instance de Ride avec les données récupérées
    const ride: Ride = {
rideID:formData.rideID,
      startLocation: formData.step1.departureAddress,
      arrivalAddress: formData.step1.arrivalAddress,
      placeDisponible: formData.step2.availableSeats,
      smoking_Vehicle: formData.step2.isSmoker,
      departureDate: formData.step3.date,
      time: formData.step3.time,
      preference: formData.step3.preference,
      avoidTolls: formData.step4.avoidTolls,
      price: formData.step4.price
    };
    // this.saveRide(ride);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ride);
    console.log('Request body:', body);

    this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
        },
        error => {
          console.error('Error:', error);
          // Afficher l'erreur ou effectuer des actions en fonction de l'erreur
          // Par exemple, vous pouvez activer un indicateur d'erreur pour afficher un message à l'utilisateur
        }
      );
  }
  /* saveRide(ride: Ride) {
     const headers = new HttpHeaders().set('Content-Type', 'application/json');
     const body = JSON.stringify(ride);
     console.log('Request body:', body);

     this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
       .subscribe(
         response => {
           console.log('Success:', response);
           this.showAlert = true;
         },
         error => {
           console.error('Error:', error);
           // Afficher l'erreur ou effectuer des actions en fonction de l'erreur
           // Par exemple, vous pouvez activer un indicateur d'erreur pour afficher un message à l'utilisateur
         }
       );
   }*/
  /*saveDataa() {
    this.showAlert = false;
    const formData = this.service.getFormData();
    const time = formData.step3.time ? new Time(formData.step3.time.hours, formData.step3.time.minutes) : null;
    const ride: Ride = {
      rideID:formData.rideID,
      startLocation: formData.step1.departureAddress,
      arrivalAddress: formData.step1.arrivalAddress,
      placeDisponible: formData.step2.availableSeats,
      smoking_Vehicle: formData.step2.isSmoker,
      departureDate:formData.step3.departureDate,
      time: formData.step3.time,
      preference: formData.step3.preference,
      avoidTolls: formData.step4.avoidTolls,
      price: formData.step4.price
    };
    const car:Car={
      carID:formData.carID,
      model: formData.step5.model,
      comfort: formData.step5.comfort,
      rid:null
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ride);
    console.log('Request body:', body);

    this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
          this.carservice.affectCarToRide(car.carID, ride.rideID).subscribe(
            response => {
              console.log(response);
              this.showAlert = true;
            },
            error => {
              // Traiter l'erreur en cas d'échec
              console.error(error);
            }
          );
        },
        error => {
          console.error('Error:', error);
        }
      );
    const bodyy = JSON.stringify(car);
    console.log('Request body:', bodyy);
    this.http.post('http://localhost:8085/spring2024/addCar', bodyy, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          car.rid=ride;
          this.showAlert = true;

        }
      )
  }*/
  saveDataa() {
    this.showAlert = false;
    const formData = this.service.getFormData();
    const time = formData.step3.time ? new Time(formData.step3.time.hours, formData.step3.time.minutes) : null;
    const ride: Ride = {
      rideID:formData.rideID,
      startLocation: formData.step1.departureAddress,
      arrivalAddress: formData.step1.arrivalAddress,
      placeDisponible: formData.step2.availableSeats,
      smoking_Vehicle: formData.step2.isSmoker,
      departureDate:formData.step3.departureDate,
      time: formData.step3.time,
      preference: formData.step3.preference,
      avoidTolls: formData.step4.avoidTolls,
      price: formData.step4.price
    };
    const car:Car={
      carID:formData.carID,
      model: formData.step5.model,
      comfort: formData.step5.comfort,
      rid: ride
    };
    const image:Image={
      imageID:formData.imageID,
      dateAdded: formData.step6.dateAdded,
      time: formData.step6.time,
      format: formData.step6.format,
      path: formData.step6.path,
      description: formData.step6.description,
      car_id:car.carID
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ride);
    console.log('Request body:', body);

    this.http.post('http://localhost:8085/spring2024/addRide', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
          car.rid = ride;
          this.carservice.affectCarToRide(car.carID, ride.rideID).subscribe(
            response => {
              console.log(response);
              this.showAlert = true;
            },
            error => {
              console.error(error);
            }
          );
        },
        error => {
          console.error('Error:', error);
        }
      );
    const bodyy = JSON.stringify(car);
    console.log('Request body:', bodyy);
    this.http.post('http://localhost:8085/spring2024/addCar', bodyy, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
        }
      )
    const bod = JSON.stringify(image);
    console.log('Request body:', bod);
    this.http.post('http://localhost:8085/spring2024/addImage', bod, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          //car.rid.rideID=ride.rideID;
          image.car_id=car.carID
          this.showAlert = true;
        }
      )
  }
}
