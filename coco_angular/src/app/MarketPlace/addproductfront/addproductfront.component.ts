import { Component } from '@angular/core';
import {Product} from "../product";
import {Pictureproduct} from "../pictureproduct";
import {ProductService} from "../MarketPlaceService/product.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {PictureproductService} from "../MarketPlaceService/pictureproduct.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-addproductfront',
  templateUrl: './addproductfront.component.html',
  styleUrls: ['./addproductfront.component.scss']
})
export class AddproductfrontComponent {
  producties = new Product();
  showAlert = false;
  image: File | null = null;
  imageMin: File | null = null;
  images: Pictureproduct[] = [];


  constructor(private productservice: ProductService, private http: HttpClient, private router: Router,private imageService: PictureproductService) {
    this.producties.pictureProduct = new Pictureproduct();
  }

  ngOnInit() {
    this.fetchImages();

  }

  saveProduct() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(this.producties);

    console.log('Request body:', body);
    this.showAlert = true;

    this.http.post('http://localhost:8085/spring2024/AddProduct', body, { headers })
        .subscribe(
            response => {
              console.log('Success:', response);
              this.router.navigate(['/addpicturetoproductfront']);
            },
            error => {
              console.error('Error saving product:', error);
              // Gérer les erreurs ici
            }
        );
  }



  closeAlert() {
    this.showAlert = false;
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
    this.imageService.getLastImage().subscribe(
        (image) => {
          this.images = [image]; // Mettre l'image dans un tableau, car getLastImage retourne une seule image
        },
        (error) => {
          console.error('Error fetching last image:', error);
        }
    );
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
