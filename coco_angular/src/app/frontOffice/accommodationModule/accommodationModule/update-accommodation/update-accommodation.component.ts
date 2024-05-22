import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccomodationService } from '../Services/accomodation.service';
import { NgForm } from '@angular/forms';
import { Accomodation } from '../../models/accomodationModel';

@Component({
  selector: 'app-update-accommodation',
  templateUrl: './update-accommodation.component.html',
  styleUrls: ['./update-accommodation.component.scss']
})
export class UpdateAccommodationComponent implements OnInit {

  accomodation: Accomodation = new Accomodation();
  formSubmitted: boolean = false;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private accomodationService: AccomodationService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.params['id'];
    this.getAccommodationDetails();
  }

  ngOnInit(): void {
  }

  getAccommodationDetails(): void {
    this.accomodationService.getAccomodationById(this.id).subscribe(
      (response: Accomodation) => {
        this.accomodation = response;
      },
      error => {
        console.error('Error fetching accomodation details:', error);
      }
    );
  }

  update(f: NgForm): void {
    this.accomodationService.updateAccomodation(this.id, this.accomodation).subscribe(
      response => {
        console.log('accomodation updated successfully:', response);
        this.router.navigate(['/accommodationF']);
      },
      error => {
        console.error('Error updating accomodation:', error);
      }
    );
  }
}
