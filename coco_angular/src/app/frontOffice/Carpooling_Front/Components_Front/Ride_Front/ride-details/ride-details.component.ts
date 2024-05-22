import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Ride} from "../../../Models_Front/Ride";
import {CarServiceService} from "../../../Services/CarService/car-service.service";
import {Car} from "../../../Models_Front/Car";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";
import {Image} from "../../../Models_Front/Image";

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.scss']
})
export class RideDetailsComponent implements OnInit{
  id!: number;
  ride = new Ride();
  showAlert = false;
  cars: Car[] = [];
  car!:Car;
  image!:Image;
  rid!:Ride;
  constructor(private route: ActivatedRoute, private rideService: RideServiceService,private carService: CarServiceService,private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['rideId'];

    this.rideService.getRide(this.id).subscribe(
      (data: any) => {
        this.rid = data;
      }
    );

    this.carService.getCarByRideID(this.id).subscribe(
      (data: Car) => { // Assurez-vous que data est du type Car
        this.car = data;
        console.log('Car Details:', this.car);
      },
      (error: any) => { // Gérez les erreurs correctement
        console.error('Error fetching car details:', error);
      }
    );
  }
  getCarsByRideId(rideId: number): void {
    // Effectuez une requête HTTP pour récupérer les voitures
    this.carService.getCarsByRideId(rideId).subscribe((response: Car) => {
      this.car = response;
    });
  }
  showaImages(carID: number) {
    this.imageService.getImageByCarID(carID).subscribe(
      (data: any) => {
        this.image = data;
        console.log('Image Details:', this.image);
      },
      error => {
        console.error('Error fetching image details:', error);
      }
    );  }
}
