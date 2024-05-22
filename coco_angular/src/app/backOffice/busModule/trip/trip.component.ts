import { Component, OnInit } from '@angular/core';
import { trip } from '../model/trip';
import { TripServiceService } from '../service/trip-service.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  listTrip: trip[] = [];

  constructor(private tripService: TripServiceService) {}

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips() {
    this.tripService.getAllTrip().subscribe({
      next: (data) => this.listTrip = data,
      error: (error) => console.log(error),
      complete: () => console.log('Trips loaded successfully')
    });
  }

  supp(id:number){
    this.tripService.removetrip(id).subscribe(
     ()=>this.ngOnInit()
    )
  }
}
