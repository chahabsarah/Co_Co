import {Component, OnInit} from '@angular/core';
import {Ride} from "../../../Models_Front/Ride";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss'],

})
export class RideListComponent implements OnInit{
  rides!: Ride[];
  constructor(private rideService: RideServiceService,private router: Router) { }
  selectedStars = 0;
  /*updateRide(rideID: number) {
    this.router.navigate(['/edit-ride', rideID]);
  }*/
  selectStars(stars: number): void {
    this.selectedStars = stars;
  }
  /* ngOnInit() {
     this.rideService.getRidesList().subscribe((response: Ride[]) => {
       this.rides = response;
     });
   }*/
  ngOnInit() {

    /*this.rideService.getRidesList().subscribe((response: any) => {
      this.rides = response;
    });*/
    this.rideService.getRidesList().subscribe(
      (response: any) => {
        this.rides = response;
      },
      error => {
        console.error('There was an error retrieving the rides:', error);
      }
    );
  }
  deleteRide(id:number) {
    this.rideService.deleteRide(id).subscribe((response) => {
      console.log(response);
      this.rides = this.rides.filter(s => {
        return s.rideID != id;
      });
    });
  }


}

