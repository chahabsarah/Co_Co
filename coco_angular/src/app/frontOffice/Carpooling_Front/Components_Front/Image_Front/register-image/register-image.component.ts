import {Component, OnInit} from '@angular/core';
import {Image} from "../../../Models_Front/Image";
import {Car} from "../../../Models_Front/Car";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RideServiceService} from "../../../Services/RideService/ride-service.service";

@Component({
  selector: 'app-register-image',
  templateUrl: './register-image.component.html',
  styleUrls: ['./register-image.component.scss']
})
export class RegisterImageComponent implements OnInit {
  path: string = '';
  description: string = '';
  dateAdded!: string;
  time: string='';
  format: string = '';
  //image:Image=new Image(null,new Date(),'','');
  image: Image = new Image();

  showAlert = false;
  constructor(private formDataService: RideServiceService,private carService: ImageServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }

  closeAlert() {
    this.showAlert = false;
  }
  saveImage(image: Image) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(image);

    // Log the request body to the console for debugging
    console.log('Request body:', body);

    this.http.post('http://localhost:8086/addImage', body, { headers })
      .subscribe(
        response => {
          console.log('Success:', response);
          this.showAlert = true;
          //this.router.navigate(['/rides']);
        }
      );




  }

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

