import { Component, OnInit } from '@angular/core';
import {Image} from "../../../Models_Front/Image";
import {ActivatedRoute} from "@angular/router";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent implements OnInit {

  id!: number;
  //student = new Student();
  //image:Image=new Image(null,new Date(),'','');
  image!:Image;
  //image=Image.withoutID(new Date(),'','')
  showAlert = false;

  constructor(private route: ActivatedRoute, private imageService: ImageServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['imageId'];
    this.imageService.getImage(this.id).subscribe((response: Image) => {
      this.image = response; // Pas besoin de response.data
    });

  }
  updateImage() {
    this.imageService.update(this.id, this.image).subscribe(
      (response) => {
        this.showAlert = true;
        console.log(response);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'image:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    );
  }
  closeAlert() {
    this.showAlert = false;
  }



}
