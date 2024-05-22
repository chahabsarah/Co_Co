import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripStopServiceService } from '../service/trip-stop-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TripStop } from '../model/TripStop';
import { StopServiceService } from '../service/stop-service.service';
import { TripServiceService } from '../service/trip-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-updatetrip-stop',
  templateUrl: './updatetrip-stop.component.html',
  styleUrls: ['./updatetrip-stop.component.scss']
})
export class UpdatetripStopComponent implements OnInit {
  stops: any[] = [];
  trips: any[] = [];
  tripStopForm: FormGroup;
  id!: number;

  constructor(
    private tripStopService: TripStopServiceService,
    private ss: StopServiceService,
    private ts: TripServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tripStopForm = new FormGroup({
      stopId: new FormControl('', Validators.required),
      tripId: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.tripStopService.getDetailtrip(this.id).subscribe((tripStop: TripStop) => {
      this.tripStopForm.patchValue(tripStop);
      this.tripStopForm.patchValue({ stopId: tripStop.idStop, tripId: tripStop.idTrip });
    });
    this.loadStops();
    this.loadTrips();
  }


  loadStops() {
    this.ss.getAllStop().subscribe(
      (data: any[]) => {
        this.stops = data;
      },
      error => {
        console.error('Error loading stops:', error);
      }
    );
  }

  loadTrips() {
    this.ts.getAllTrip().subscribe(
      (data: any[]) => {
        this.trips = data;
      },
      error => {
        console.error('Error loading trips:', error);
      }
    );
  }

  updateTrip(): void {
    if (this.tripStopForm.valid) {
      const { arrivalTime } = this.tripStopForm.value;

      
      const arrivalDate = new Date(arrivalTime);

      // Add 5 minutes to the arrival time for departure time
      const departureDate = new Date(arrivalDate.getTime() + 5 * 60000); // 5 minutes in milliseconds

      // Format the arrival and departure times for datetime-local input
      const formattedArrivalTime = formatDate(arrivalDate, 'yyyy-MM-ddTHH:mm', 'en-US');
      const formattedDepartureTime = formatDate(departureDate, 'yyyy-MM-ddTHH:mm', 'en-US');

      // Update the form controls with the formatted times
      this.tripStopForm.patchValue({
        arrivalTime: formattedArrivalTime,
        departureTime: formattedDepartureTime
      });

      // Create the updatedTrip object
      const updatedTrip: TripStop = {
        ...this.tripStopForm.value,
        id: this.id
      };

      // Call the service method to update the trip
      this.tripStopService.updateTripStop(updatedTrip).subscribe({
        next: (response) => {
          console.log('Trip updated successfully', response);
          this.router.navigate(['/tripStop']);
        },
        error: (error) => console.error('Error updating trip', error)
      });
    }
  }
}
