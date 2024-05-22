import {Component, OnInit} from '@angular/core';
import {Ride} from "../../../Models_Front/Ride";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-rides',
  templateUrl: './search-rides.component.html',
  styleUrls: ['./search-rides.component.scss']
})
export class SearchRidesComponent implements OnInit {
  searchResults: Ride[] = [];
  constructor(private rideService: RideServiceService,private router: Router) {
  }
  ngOnInit(): void {
    console.log(this.rideService.ridese);
    this.searchResults=this.rideService.ridese;
    if (this.searchResults.length === 0){
      console.log("pas des rides");
    }else{
      console.log("not empty");
    }
  }
  ngDoCheck(): void {
    if (this.rideService.ridese !== this.searchResults) {
      this.searchResults = this.rideService.ridese;
    }
  }
}
