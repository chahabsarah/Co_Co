import {Component, OnInit} from '@angular/core';
import {ProductService} from "../MarketPlaceService/product.service";
import {PictureproductService} from "../MarketPlaceService/pictureproduct.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addpicturetoproductfront',
  templateUrl: './addpicturetoproductfront.component.html',
  styleUrls: ['./addpicturetoproductfront.component.scss']
})
export class AddpicturetoproductfrontComponent implements OnInit{
  idproduct!: number;
  idPicture!: number;
  latestProductId!: number;
  latestPictureId!: number;

  constructor(private productService: ProductService, private pictureService: PictureproductService,private router:Router) { }

  ngOnInit(): void {
    this.loadLatestIds();
  }

  loadLatestIds(): void {
    this.productService.getLastProductId().subscribe(
        (idproduct) => {
          this.latestProductId = idproduct;
          this.pictureService.getLastPictureId().subscribe(
              (idPicture) => {
                this.latestPictureId = idPicture;
                //   this.router.navigate(['/product-list']);
              },
              (error) => {
                console.error('Error fetching last picture ID:', error);
              }
          );
        },
        (error) => {
          console.error('Error fetching last product ID:', error);
        }
    );
  }


  assignPicture(): void {
    if (this.idproduct && this.idPicture && this.idproduct !== 0 && this.idPicture !== 0) {
      // Les identifiants de produit et d'image sont valides
      this.productService.assignPictureToProduct(this.idproduct, this.idPicture)
          .subscribe(
              () => {
                console.log('Picture assigned to product successfully');
                this.resetForm();
                this.router.navigate(['/products']);
              },
              (error) => {
                console.error('Error assigning picture to product:', error);
              }
          );
    } else {
      console.error('Please provide both product ID and picture product ID');
    }
  }


  resetForm(): void {
    this.idproduct =0;
    this.idPicture = 0;
  }
}
