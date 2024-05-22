import {Component, OnInit} from '@angular/core';
import {Car} from "../../../../Models_Front/Car";
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";
import {CarServiceService} from "../../../../Services/CarService/car-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  comfort: boolean = false;
  model: string = '';
  car: Car = new Car();
  //car = new Car();
  // car = new Car(null, '', true, new Ride(null,'', new Date(), new Date(), 0));

  showAlert = false;
  constructor(private formDataService: RideServiceService,private carService: CarServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  /*saveCar(car: Car) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(car);
    console.log('Request body:', body);
    this.http.post('http://localhost:8086/addCar', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
          this.router.navigate(['/coco']);
        }
      );
  }*/
  showFormData() {
    this.formDataService.setFormData({
      comfort: this.comfort,
      model: this.model
    }, 5);
  }
}
