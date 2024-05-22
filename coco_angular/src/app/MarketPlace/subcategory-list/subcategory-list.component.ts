import {Component, OnInit} from '@angular/core';
import {CategoryProduct} from "../category-product";
import {CategoryProductService} from "../MarketPlaceService/category-product.service";
import {ProductComponent} from "../../backOffice/marketPlaceModule/product/product.component";
import {SubcategoryProductService} from "../MarketPlaceService/subcategory-product.service";
import {SubCategoryProduct} from "../subcategory-product";

@Component({
  selector: 'app-category-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent implements OnInit{
  subcategoryProducts : SubCategoryProduct[] = [];
  constructor(private subcategoryservice:SubcategoryProductService ) {
  }
  ngOnInit() {

    this.loadCategories()
  }
  loadCategories() {
    this.subcategoryservice.getAllSubCategoryProducts().subscribe((response : any)=>{
      this.subcategoryProducts = response ;
    });
  }
  deleteSubCategory(idSubCategory: any) {
    if (confirm('Are you sure you want to delete this Subcategory?')) {
      this.subcategoryservice.deleteSubCategoryProduct(idSubCategory).subscribe(
        () => {
          console.log('SubCategory deleted successfully.');
          // Reload the category list after deletion
          this.loadCategories()
        },
        error => {
          console.error('Error deleting Subcategory:', error);
        }
      );
    }
  }

}
