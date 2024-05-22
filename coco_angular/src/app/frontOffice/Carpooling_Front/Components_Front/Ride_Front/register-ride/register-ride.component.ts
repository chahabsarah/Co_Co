import {Component, OnInit} from '@angular/core';
import {Ride} from "../../../Models_Front/Ride";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-register-ride',
  templateUrl: './register-ride.component.html',
 // standalone: true,
  styleUrls: ['./register-ride.component.scss']
})
export class RegisterRideComponent implements OnInit {

  //ride = new Ride();
  //const ride:Ride();
  ride: Ride = new Ride();
  showAlert = false;
  constructor(private rideService: RideServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  saveRide(ride: Ride) {
    /* this.rideService.createRide(this.ride).subscribe((response) => {
       console.log(response); });*/
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(ride);

    // Log the request body to the console for debugging
    console.log('Request body:', body);

    this.http.post('http://localhost:8086/addRide', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
          //this.router.navigate(['/rides']);
        }
      );


    /*this.ride = new Ride();*/

  }
}
