import { Component } from '@angular/core';
import {SubCategoryProduct} from "../subcategory-product";
import {SubcategoryProductService} from "../MarketPlaceService/subcategory-product.service";
import {Product} from "../product";
import {ProductService} from "../MarketPlaceService/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products : Product[] = [];
  title='pagination';
  page:number = 1
  count:number = 10
  tableSize : number = 10 ;
  tableSizes:any=[5,10,15,20];
  searchText:any;
    idProduct!:number;
    imageUrl!:String;
  constructor(private productservice:ProductService ) {
  }
  ngOnInit() {

    this.loadCategories()
  }
  loadCategories() {
    this.productservice.getAllProducts().subscribe((response : any)=>{
      this.products = response ;
    });

  }
  deleteProduct( idProduct: any) {
    if (confirm('Are you sure you want to delete this Product?')) {
      this.productservice.deleteProduct( idProduct).subscribe(
          () => {
            console.log('Product deleted successfully.');
            // Reload the category list after deletion
            this.loadCategories()
          },
          error => {
            console.error('Error deleting Product:', error);
          }
      );
    }
  }
  onTableDataChange(event:any){
    this.page = event;
    this.loadCategories()
  }
  onTableSizeChange(event:any):void{
    this.tableSize= event.target.value;
    this.page=1;
    this.loadCategories();
  }
  loadImageUrl() {
     // Remplacez 1 par l'ID du produit que vous souhaitez obtenir l'URL de l'image
    this.productservice.getImageUrlForProduct(this.idProduct).subscribe(
      (imageUrl: string) => {
        this.imageUrl = imageUrl;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
