import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryProduct} from "../category-product";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {
  private baseUrl = 'http://localhost:8085';

  constructor(private http:HttpClient) { }
  createCategoryProduct(categoryProduct:CategoryProduct){
    return this.http.post( 'http://localhost:8085/spring2024/AddCategoryProduct' ,categoryProduct);
  }
  updateCategoryProduct(categoryProduct:CategoryProduct,idCategory:number){
    return this.http.put('http://localhost:8085/spring2024/CategoryProduct/' + idCategory,categoryProduct);
  }
  getCategoryList():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/GetCategoryProduct');
  }
  getCategoryProductById(idCategory:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/CategoryProduct/'+ idCategory );
  }
  deleteCategory(idCategory:number){
    return this.http.delete('http://localhost:8085/spring2024/CategoryProduct/' + idCategory);
  }

}

