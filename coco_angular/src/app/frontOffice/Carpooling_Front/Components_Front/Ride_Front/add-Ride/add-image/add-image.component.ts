import {Component, OnInit} from '@angular/core';
import {Time} from "@angular/common";
import {RideServiceService} from "../../../../Services/RideService/ride-service.service";
import {CarServiceService} from "../../../../Services/CarService/car-service.service";
import {Router, RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit{
  path: string = '';
  description: string = '';
  dateAdded!: string;
  time: string='';
  format: string = '';

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
      path: this.path,
      description: this.description,
      dateAdded: this.dateAdded,
      time: this.time,
      format: this.format
    }, 6);
  }
}
