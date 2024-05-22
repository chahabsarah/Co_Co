import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from 'src/app/frontOffice/accommodationModule/models/UserModel';
import { Sold } from 'src/app/frontOffice/accommodationModule/models/Sold';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }
  getUserById(id:number):Observable<any>{
    return this.http.get( 'http://localhost:8085/spring2024/getuserid/'+ id );
  }
  /***************ajouté par hadil*****************/
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`http://localhost:8085/spring2024/user/current`);
  }
  createSoldForUser(userId: number, accountSoldValue: number): Observable<Sold> {
    return this.http.post<Sold>('http://localhost:8085/spring2024/api/sold/create', { userId, accountSoldValue });
  }

  findCurrentUserSoldByIdUser(userId: number): Observable<Sold> {
    return this.http.get<Sold>(`http://localhost:8085/spring2024/api/sold/${userId}`);
  }
  updateSoldForUser(userId: number, newAccountSoldValue: number): Observable<Sold> {
    return this.http.put<Sold>(`http://localhost:8085/spring2024/api/sold/update/${userId}?newAccountSoldValue=${newAccountSoldValue}`, {});
  }
  /********** end hadil**/
}
