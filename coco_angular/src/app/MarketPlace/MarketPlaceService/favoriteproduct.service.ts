import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriteproductService {


  constructor(private http:HttpClient) { }
  addToFavorites(idProduct: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8085/spring2024/addFavProd?idProduct=${idProduct}`, {});
  }

  getUserById(id: number): Observable<any>{
    return this.http.get<any>('http://localhost:8085/spring2024/getuserid/'+id);
  }




  isProductInFavorites(idProduct:number):Observable<boolean>{
    return this.http.get<boolean>('http://localhost:8085/spring2024/FavProd/check?idProduct=${idProduct}');
  }
  getUserFavorites(id:number):Observable<Product[]>{
    return this.http.get<Product[]>( 'http://localhost:8085/spring2024/getfav/'+ id);
  }
  removeFromFavorites(idProduct: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/spring2024/removeFavProd?idProduct=${idProduct}`, {});
  }


}
