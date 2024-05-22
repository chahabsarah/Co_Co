import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../Environements/environement";
import {Car} from "../../Models_Front/Car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {


  constructor(private  http:HttpClient) { }
  baseUrl = environment.API_BASE_URL;
  private baseUrli = 'http://localhost:8085';

  createCar(car: Car) {
    return this.http.post(this.baseUrl + "/addCar", car);
  }
  /*updateCar(car: Car) {
    return this.http.put(this.baseUrl + "/updateCar", car);
  }*/
  /*updateCar(p:Car,id:number){
    return this.http.put('http://localhost:8086/updateCar'+'/'+id,p)
  }*/
  /*update(car: Car) {
    return this.http.put<Car>(`http://localhost:8086/updateCar/${car.carID}`, car);
  }*/
  update(carID: number, updatedCar: Car): Observable<Car> {
    return this.http.patch<Car>("http://localhost:8085/updateCar/" + carID, updatedCar);
  }
  deleteCar(carID:number) {
    return this.http.delete(this.baseUrl + "/deleteCar/" + carID);
  }
  /*getCar(carID:number) {
   // return this.http.get(this.baseUrl + "/getCarById/" + carID);
    return this.http.get<Car>('http://localhost:8086/getCarById/'+carID)
  }*/
  getCar(carId:number){
    return this.http.get<Car>('http://localhost:8085/getCarById/'+carId)
  }
  getCarsByRideId(rideId:number){
    return this.http.get<Car>('http://localhost:8085/cars/'+rideId)
  }
  getCarsList() {
    return this.http.get(this.baseUrl + "/getAllCar");

  }
  getCarByRideID(rideID: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/cars/${rideID}`);
  }
  affectCarToRide(carID: number, rideID: number): Observable<string> {
    let params = new HttpParams()
      .set('carID', carID.toString())
      .set('rideID', rideID.toString());
    return this.http.post<string>(this.baseUrl + '/affectCarToRide', {}, { params });
  }
}
