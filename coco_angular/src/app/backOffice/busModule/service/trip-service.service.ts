import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { trip } from '../model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  private baseUrl : string =  'http://localhost:8085/spring2024/Trip/';



  constructor(private http: HttpClient) { }

  getAllTrip(): Observable<trip[]> {
    return this.http.get<trip[]>(this.baseUrl + 'get-all');
  }


  addtrip(t: trip): Observable<any> {
    return this.http.post(this.baseUrl + 'add', t);
  }

  removetrip(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'remove/' + id);
  }

  updatetrip(t: trip): Observable<trip> {
    return this.http.put<trip>(this.baseUrl + 'update', t);
  }

  getDetailtrip(id: number): Observable<trip> {
    return this.http.get<trip>(this.baseUrl + 'get/' + id);
  }
  private formData: any = {};
  setFormData(data: any) {
    this.formData = data;
  }

}
