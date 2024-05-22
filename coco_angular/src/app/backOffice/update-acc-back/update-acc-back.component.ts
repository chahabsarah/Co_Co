import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccomodationService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/accomodation.service';
import { Accomodation } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-update-acc-back',
  templateUrl: './update-acc-back.component.html',
  styleUrls: ['./update-acc-back.component.scss']
})
export class UpdateAccBackComponent implements OnInit{
  aFormGroup!: FormGroup;
  accomodation: Accomodation = new Accomodation();
  formSubmitted: boolean = false;
  id: number;

  constructor(    private route: ActivatedRoute,
    private accomodationService: AccomodationService, private router: Router, private formBuilder: FormBuilder)
  {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  update(f: NgForm): void {
    this.accomodationService.updateAccomodation(this.id,this.accomodation).subscribe(
      response => {
        console.log('accomodation updated successfully:', response);
        this.router.navigate(['/getAllAccomodation'])

      },
      error => {
        console.error('Error adding accomodation:', error);
      }
    );
  }
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";
}

