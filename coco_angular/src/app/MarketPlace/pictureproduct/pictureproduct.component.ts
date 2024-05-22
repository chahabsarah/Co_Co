import {Component, OnInit} from '@angular/core';
import {Pictureproduct} from "../pictureproduct";
import {PictureproductService} from "../MarketPlaceService/pictureproduct.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pictureproduct',
  templateUrl: './pictureproduct.component.html',
  styleUrls: ['./pictureproduct.component.scss']
})
export class PictureproductComponent implements OnInit {
  image: File | null = null;
  imageMin: File | null = null;
  images: Pictureproduct[] = [];

  constructor(private imageService: PictureproductService) {
  }

  ngOnInit() {
    this.fetchImages();

  }

  onFileChange(event: any) {
    this.image = event.target.files[0];
    this.imageMin = null;
    const fr = new FileReader();
    fr.onload = (evento: any) => (
        this.imageMin = evento.target.result
    );
    if (this.image) {
      fr.readAsDataURL(this.image);
    }
  }

 public onUpload(): void {
    if (this.image) {
      this.imageService.upload(this.image).subscribe(
          data => {
            this.fetchImages();
          },
          err => {
            this.reset();
            this.fetchImages();
          }
      )
    }
  }

  reset(): void {
    this.image = null;
    this.imageMin = null;
    const imageInputFile = document.getElementById('image') as HTMLInputElement;
    if (imageInputFile) {
      imageInputFile.value = ''
    }
  }

  fetchImages(): void {
    this.imageService.list().subscribe(
        (images) => {
          this.images = images
        },
        (error) => {
          console.error('Error fetching images:', error)
        }
    )
  }

  deleteImage(imageId: any): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to continue?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.imageService.delete(imageId).subscribe(
          (response: any) => {
            // Check if the response contains the expected message
            if (response && response.message === "image supprimé") {
              // Image deleted successfully
              this.fetchImages();
              Swal.fire('Image Deleted', 'Image deleted successfully.', 'success');
            } else {
              // Handle unexpected response
              console.error('Unexpected response:', response);
            }
          },
          error => {
            console.error('Error deleting image:', error);
            Swal.fire('Error', 'image deleted.', 'error');
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Operation canceled', '', 'error');
      }
    });
  }









}
