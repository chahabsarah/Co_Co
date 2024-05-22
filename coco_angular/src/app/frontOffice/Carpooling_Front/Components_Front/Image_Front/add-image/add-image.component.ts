import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {RideServiceService} from "../../../Services/RideService/ride-service.service";
import {ImageServiceService} from "../../../Services/ImageService/image-service.service";
import {HttpClient} from "@angular/common/http";
import {ImageUploadService} from "../../../Services/amir/image-upload.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent  {
 /* imageURL: string = '';
  fileToUpload: File | null = null;

  constructor(private fileUploadService: ImageServiceService) {}

  handleFileInput(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }
  uploadFile() {
    if (this.fileToUpload) {
      this.fileUploadService.uploadFile(this.fileToUpload).subscribe(
        (url: string) => {
          console.log("ok");
          this.imageURL = url; // Assurez-vous que l'URL est correctement affectée
          console.log('URL de l\'image : ', this.imageURL);
        },
        (error) => {
          console.error('Erreur lors de l\'upload : ', error);
          //console.log("okm");
        }
      );
    }
  }*/



    @Input() imageURL!: string;
    @Output() imageUploaded = new EventEmitter<string>();
    imageURLe: string = '';
    constructor(private fileUploadService: ImageServiceService) {}

    ngOnInit(): void {}

    uploadFile(event: any): void {
     const file = event.target.files[0];
      this.fileUploadService.uploadFile(file).subscribe((url) => {
        this.imageURL = url;
        this.imageUploaded.emit(url);
      });

    }
}
