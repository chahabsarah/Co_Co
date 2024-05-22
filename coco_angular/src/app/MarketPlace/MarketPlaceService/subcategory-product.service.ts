import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryProduct} from "../category-product";
import {Observable} from "rxjs";
import {SubCategoryProduct} from "../subcategory-product";

@Injectable({
  providedIn: 'root'
})
export class SubcategoryProductService {

  constructor(private http:HttpClient) { }
  createSubCategoryProduct(subcategoryProduct:SubcategoryProductService){
    return this.http.post( 'http://localhost:8085/spring2024/AddSubCategory' ,subcategoryProduct);
  }

  updateSubCategoryProduct(subcategoryProduct: SubCategoryProduct, idSubCategory: number): Observable<any> {
    return this.http.put('http://localhost:8085/spring2024/SubCategoryProduct/' + idSubCategory, subcategoryProduct);
  }

  getAllSubCategoryProducts():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/getSubCategoryProduct');
  }
  getSubCategoryProductById(idSubCategory:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/SubCategoryProduct/'+ idSubCategory );
  }
  deleteSubCategoryProduct(idSubCategory:number){
    return this.http.delete('http://localhost:8085/spring2024/SubCategoryProduct/' + idSubCategory);
  }
  addSubcategoryToCategory(idCategory: number, idSubCategory: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8085/spring2024/${idCategory}/subcategories/${idSubCategory}`, null);
  }
}
