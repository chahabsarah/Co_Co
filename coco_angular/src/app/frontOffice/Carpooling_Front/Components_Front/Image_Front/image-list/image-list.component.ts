import {Component, OnInit} from '@angular/core';
import {Image} from "../../../Models_Front/Image";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit{
  images!: Image[];
  errorMessage!: string;
  constructor(private imageService: ImageServiceService) { }
  ngOnInit() {
    this.imageService.getImagesList().subscribe((response: any) => {
      this.images = response;
    });

  }
  deleteImage(id:number) {
    this.imageService.deleteImage(id).subscribe((response) => {
      console.log(response);
      this.images = this.images.filter(s => {
        return s.imageID != id;
      });
    });
  }


}

