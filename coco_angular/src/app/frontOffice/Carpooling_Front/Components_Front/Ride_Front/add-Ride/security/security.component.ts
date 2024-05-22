import { Component } from '@angular/core';
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";
import {Time} from "@angular/common";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  departureDate!: string;
  time: Time | null = null;
  preference: string = '';
  constructor(private dataService: RideServiceService) { }
  showFormData() {
    /* this.formDataService.setFormData({
       date: this.departureDate,
       time: this.time,
       preference: this.preference
     }, 3);
     console.log("FormData from SecurityComponent:", {
       date: this.departureDate,
       time: this.time,
       preference: this.preference
     });*/
    this.dataService.setFormData({
      departureDate: this.departureDate,
      time: this.time,
      preference: this.preference
    }, 3);
  }
}
