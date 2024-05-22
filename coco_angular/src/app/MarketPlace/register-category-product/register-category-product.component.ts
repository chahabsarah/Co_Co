import {Component, OnInit} from '@angular/core';
import {CategoryProduct} from "../category-product";
import {CategoryProductService} from "../MarketPlaceService/category-product.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-category-product',
  templateUrl: './register-category-product.component.html',
  styleUrls: ['./register-category-product.component.scss']
})
export class RegisterCategoryProductComponent implements OnInit{
  categories = new CategoryProduct;
  showAlert = false;

constructor(private CategoryService:CategoryProductService,private http:HttpClient,private router: Router) {
}
ngOnInit() {
}

  saveCategory() {
    /* this.rideService.createRide(this.ride).subscribe((response) => {
       console.log(response); });*/
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(this.categories);

    // Log the request body to the console for debugging
    console.log('Request body:', body);
    this.showAlert=true;
    this.http.post('http://localhost:8085/spring2024/AddCategoryProduct', body, { headers })
        .subscribe(
            response => {
              console.log('Success:', response);
              this.router.navigate(['/category-list']);
             });
  }
  closeAlert(){
      this.showAlert = false ;
  }
}
