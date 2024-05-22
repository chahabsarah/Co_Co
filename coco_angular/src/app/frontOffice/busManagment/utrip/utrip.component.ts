import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trip } from 'src/app/backOffice/busModule/model/trip';
import { TripServiceService } from 'src/app/backOffice/busModule/service/trip-service.service';

@Component({
  selector: 'app-utrip',
  templateUrl: './utrip.component.html',
  styleUrls: ['./utrip.component.scss']
})
export class UtripComponent implements OnInit {
  listTrip: trip[] = [];

  constructor(private tripService: TripServiceService,private router: Router) {}

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
  showMap(departureLocation: string, arrivalLocation: string) {
    // Redirect to the map component with query parameters for departure and arrival locations
    this.router.navigate(['/map'], { queryParams: { departureLocation, arrivalLocation } });
  }



}
