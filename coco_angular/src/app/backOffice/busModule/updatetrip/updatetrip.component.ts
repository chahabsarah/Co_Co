import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { trip } from '../model/trip';
import { TripServiceService } from '../service/trip-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetrip',
  templateUrl: './updatetrip.component.html',
  styleUrls: ['./updatetrip.component.scss']
})
export class UpdateTripComponent implements OnInit {
  tripForm: FormGroup;
  id!: number;
  trip!: trip;

  constructor(private tripService: TripServiceService, private router: Router, private route: ActivatedRoute) {
    this.tripForm = new FormGroup({
      tripId: new FormControl('', Validators.required),
      stopId: new FormControl('', Validators.required),
      departureLocation: new FormControl('', Validators.required),
      arrivalLocation: new FormControl('', Validators.required),
      estimatedDuration: new FormControl('', Validators.required),
      fare: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tripService.getDetailtrip(this.id).subscribe((trip: trip) => {
      this.tripForm.patchValue(trip);
    });
  }

  updateTrip(): void {
    if (this.tripForm.valid) {
      const updatedTrip = { ...this.tripForm.value, idTrip: this.id } as trip;
      this.tripService.updatetrip(updatedTrip).subscribe({
        next: (response) => {
          console.log('Trip updated successfully', response);
          this.router.navigate(['/tripStop']);
        },
        error: (error) => console.error('Error updating trip', error)
      });
    }
  }
}
