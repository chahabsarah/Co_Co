import {Component, OnInit} from '@angular/core';
import {Car} from "../../../Models_Front/Car";
import {CarServiceService} from "../../../Services/CarService/car-service.service";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";
import {catchError, map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit{
  cars: Car[]=[];
  errorMessage: string='';
  constructor(private carService: CarServiceService,private imageService :ImageServiceService) { }
  ngOnInit() {
    this.carService.getCarsList().subscribe((response: any) => {
      this.cars = response;
      console.log("list car",this.cars);
    });

  }
  deleteCar(id:number) {
    this.carService.deleteCar(id).subscribe((response) => {
      console.log(response);
      this.cars = this.cars.filter(s => {
        return s.carID != id;
      });
    });
  }

 /* getImagePath(carID: number): Observable<string> {
    return this.imageService.getImagePathe(carID).pipe(
      map((image: any) => image.path)
    );
  }*/

  getImagePath(carID: number): any {
     }


}

