import { Injectable } from '@angular/core';
import { stop } from '../model/stop';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StopServiceService {

  private baseUrl : string =  'http://localhost:8085/spring2024/Stop/';

  constructor(private http: HttpClient) { }

  getAllStop(): Observable<stop[]> {
    return this.http.get<stop[]>(this.baseUrl + 'get-all');
  }

  addStop(s: stop): Observable<any> {
    return this.http.post(this.baseUrl + 'add', s);
  }

  removeStop(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'remove/' + id);
  }

  updateStop(s: stop): Observable<stop> {
    return this.http.put<stop>(this.baseUrl + 'update', s);
  }

  getDetailStop(id: number): Observable<stop> {
    return this.http.get<stop>(this.baseUrl + 'get/' + id);
  }

}
