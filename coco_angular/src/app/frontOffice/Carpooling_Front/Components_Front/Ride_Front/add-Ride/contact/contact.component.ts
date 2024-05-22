import { Component } from '@angular/core';
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  availableSeats!: string ;
  isSmokerFriendly: string = 'false';
  constructor(private formDataService: RideServiceService) { }
  /*onSubmit() {
    // retrieve the values from the form controls and set them to the properties
    this.availableSeats = (<HTMLInputElement>document.getElementById("availableSeats")).value;
    this.isSmokerFriendly = (<HTMLInputElement>document.getElementById("isSmokerFriendly")).value;
  }*/
  onNext() {
    /* this.formDataService.setFormData({
       availableSeats: this.availableSeats,
       isSmokerFriendly: this.isSmokerFriendly
     }, 2);*/
  }

  showFormData() {
    this.formDataService.setFormData({
      availableSeats: this.availableSeats,
      isSmokerFriendly: this.isSmokerFriendly
    }, 2);
  }
}
