import {Component, OnInit} from '@angular/core';
import {Ride} from "../../../Models_Front/Ride";
import {ActivatedRoute} from "@angular/router";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.scss']
})
export class EditRideComponent implements OnInit {

  id!: number;
   ride = new Ride();
  //ride: Ride = new Ride(null, '', new Date(), new Date(), 0);
 // ride!:Ride;
  showAlert = false;

  constructor(private route: ActivatedRoute, private rideService: RideServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['rideId'];
    this.rideService.getRide(this.id).subscribe((response: any) => {
      this.ride = response;
    });

  }
  updateRide() {
    this.rideService.update(this.id, this.ride).subscribe(
      (response) => {
        this.showAlert = true;
        console.log(response);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du ride:', error);
      }
    );
  }
  closeAlert() {
    this.showAlert = false;
  }
}

