import { Component } from '@angular/core';
import {CarServiceService} from "../../../Services/CarService/car-service.service";
import {NgForm} from "@angular/forms";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";

@Component({
  selector: 'app-affect-image-to-car',
  templateUrl: './affect-image-to-car.component.html',
  styleUrls: ['./affect-image-to-car.component.scss']
})
export class AffectImageToCarComponent {
  imageID!: number;
  carID!: number;
  constructor(private imageService:ImageServiceService) { }
  affect(form: NgForm) {
    this.imageService.affectImageToCar(this.imageID, this.carID).subscribe(
      response => {
        // Traiter la réponse en cas de succès
        console.log(response);
      },
      error => {
        // Traiter l'erreur en cas d'échec
        console.error(error);
      }
    );
  }
}
