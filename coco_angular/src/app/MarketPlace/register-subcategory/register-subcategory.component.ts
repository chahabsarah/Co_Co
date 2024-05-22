import {Component, OnInit} from '@angular/core';
import {CategoryProduct} from "../category-product";
import {CategoryProductService} from "../MarketPlaceService/category-product.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SubCategoryProduct} from "../subcategory-product";


@Component({
  selector: 'app-register-subcategory',
  templateUrl: './register-subcategory.component.html',
  styleUrls: ['./register-subcategory.component.scss']
})
export class RegisterSubcategoryComponent implements OnInit{
  subcategories = new SubCategoryProduct();
  showAlert = false;

  constructor(private CategoryService:CategoryProductService,private http:HttpClient,private router: Router) {
  }
  ngOnInit() {
  }

  saveCategory() {
    /* this.rideService.createRide(this.ride).subscribe((response) => {
       console.log(response); });*/
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(this.subcategories);

    // Log the request body to the console for debugging
    console.log('Request body:', body);
    this.showAlert=true;
    this.http.post('http://localhost:8085/spring2024/AddSubCategory', body, { headers })
        .subscribe(
            response => {
              console.log('Success:', response);
              this.router.navigate(['/subcategory-list']);
            });
  }
  closeAlert(){
    this.showAlert = false ;
  }
}
