import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarServiceService} from "../../../Services/CarService/car-service.service";
import {Car} from "../../../Models_Front/Car";

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  showAlert = false;
  constructor(private route: ActivatedRoute, private carService: CarServiceService) { }
  id!: number;

  car = new Car();

  ngOnInit() {
    /*this.id=this.route.snapshot.params['id'];
    this.carService.getCar(this.id).subscribe((response: any) => {
      this.car = response.data;
    });*/
    this.id = this.route.snapshot.params['carId'];
    this.carService.getCar(this.id).subscribe((response: Car) => {
      this.car = response; // Pas besoin de response.data
    });
  }
  updateCar() {
    /*this.carService.update(this.car).subscribe((response) => {
      this.showAlert = true;
      console.log(response);
    });*/
    this.carService.update(this.id, this.car).subscribe(
      (response) => {
        this.showAlert = true;
        console.log(response);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du car:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    );
  }
  closeAlert() {
    this.showAlert = false;
  }
}

