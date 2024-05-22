import {Component, OnInit} from '@angular/core';
import {CategoryProduct} from "../category-product";
import {CategoryProductService} from "../MarketPlaceService/category-product.service";
import {ProductComponent} from "../../backOffice/marketPlaceModule/product/product.component";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
   categoryProducts : CategoryProduct[] = [];
  constructor(private categoryservice:CategoryProductService ) {
  }
  ngOnInit() {

    this.loadCategories()
  }
  loadCategories() {
    this.categoryservice.getCategoryList().subscribe((response : any)=>{
      this.categoryProducts = response ;
    });
  }
  deleteCategory(idCategory: any) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryservice.deleteCategory(idCategory).subscribe(
          () => {
            console.log('Category deleted successfully.');
            // Reload the category list after deletion
            this.loadCategories()
          },
          error => {
            console.error('Error deleting category:', error);
          }
      );
    }
  }

}
