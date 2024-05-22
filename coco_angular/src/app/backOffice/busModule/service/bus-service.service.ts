import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusComponent } from '../bus/bus.component';
import { bus } from '../model/bus';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private baseUrl : string =  'http://localhost:8085/spring2024/Bus/';

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getAllBus(){
    return this.http.get<bus[]>(this.baseUrl + 'get-all');
  }
  addBus(b:bus){
    return this.http.post(this.baseUrl + 'add', b);
  }

  removeBus(id:number){
    return this.http.delete(this.baseUrl + 'remove' +'/'+id)
  }
  
  UpdateBus(b: bus) : Observable<bus> {
    return this.http.put<bus> ( this.baseUrl + 'update', b);
  }
  getDetailbus(id: number): Observable<bus> {
    return this.http.get<bus>(this.baseUrl + 'get/' + id);
  }

}
