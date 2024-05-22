import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccomodationService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/accomodation.service';
import { Accomodation } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-detail-acc-back',
  templateUrl: './detail-acc-back.component.html',
  styleUrls: ['./detail-acc-back.component.scss']
})
export class DetailAccBackComponent implements OnInit{
  accomodation: Accomodation = new Accomodation();

  constructor(private accomodationService: AccomodationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accommodationID = Number(params.get('id'));
      this.accomodationService.getAccomodationById(accommodationID).subscribe(accomodation => {
        this.accomodation = accomodation;
      });
    });
  }
}
