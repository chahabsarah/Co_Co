import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SubCategoryProduct} from "../subcategory-product";
import {Observable, throwError} from "rxjs";
import {Product} from "../product";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(product: Product){
    return this.http.post( 'http://localhost:8085/spring2024/AddProduct' ,product);
  }

updateProduct(product: Product, idProduct: number): Observable<any> {
    return this.http.put('http://localhost:8085/spring2024/Product/' + idProduct, product);
  }

getAllProducts():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/Product');
  }
getProductById(idProduct:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/Productget/'+ idProduct );
  }
deleteProduct(idProduct:number){
    return this.http.delete('http://localhost:8085/spring2024/Productdelete/' + idProduct);
  }
  getAllProductsSortedByPriceAsc():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/ProductsortedByPriceAsc');
  }
  getProductsSortedByPriceDesc():Observable<any>{
    return this.http.get('http://localhost:8085/spring2024/ProdSortedByPriceDesc');

  }
    assignProductToSubcategory(idProduct: number, idSubCategory: number): Observable<any> {
        return this.http.put<any>(`http://localhost:8085/spring2024/${idProduct}/subcategory/${idSubCategory}`, null);
    }
  assignPictureToProduct(idProduct: number, idpicture: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8085/spring2024/assignPictureToProduct?idProduct=${idProduct}&idpicture=${idpicture}`, {});
  }
    getLastProductId(): Observable<number> {
        return this.http.get<number>('http://localhost:8085/spring2024/last-id/product');
    }
 /* getImageUrlForProduct(idProduct: number): Observable<string> {
    return this.http.get<string>(`http://localhost:8085/spring2024/${idProduct}/image-url`);
  }*/
  getImageUrlForProduct(idProduct: number): Observable<string> {
    return this.http.get<string>(`http://localhost:8085/spring2024/imageurl/`+ idProduct)
      .pipe(
        catchError(error => {
          console.error('Error fetching image URL:', error);
          return throwError('Error fetching image URL. Please try again.');
        })
      );
  }


//https://www.w3schools.com/icons/fontawesome_icons_intro.asp
}
