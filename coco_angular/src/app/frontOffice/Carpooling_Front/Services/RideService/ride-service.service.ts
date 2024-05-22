import { Injectable } from '@angular/core';
import {Ride} from "../../Models_Front/Ride";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../Environements/environement";

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {
   ridese: Ride[] = [];
  constructor(private  http:HttpClient) { }
  baseUrl = environment.API_BASE_URL;
  createRide(ride: Ride) {
    return this.http.post(this.baseUrl + "/addRide", ride);
  }
  /*updateRide(ride: Ride) {
    return this.http.put(this.baseUrl + "/updateRide", ride);
  }*/
  update(rideID: number, updatedRide: Ride): Observable<Ride> {
    return this.http.patch<Ride>("http://localhost:8085/updateRide/" + rideID, updatedRide);
  }
  deleteRide(rideID:number) {
    return this.http.delete(this.baseUrl + "/deleteRide/" + rideID);
  }
  getRide(rideID:number) {
    return this.http.get(this.baseUrl + "/getRideById/" + rideID);
  }
 /* getRidesListe() {
    return this.http.get(this.baseUrl + "/getAllAdress");
  }*/
  getRidesListe(): Observable<string[]> {
    // ...
    return this.http.get<string[]>(this.baseUrl + '/getAllAdress');
  }
  private apiUrle = 'http://localhost:8085/rides';
  getRidesByStartLocation(startLocation: string): Observable<Ride[]> {
    const params = { startlocation: startLocation };
    return this.http.get<Ride[]>(this.apiUrle, { params: params });
  }

/*  _searchResults = new BehaviorSubject<Ride[]>([]);
  updateSearchResults(results: Ride[]) {
    this._searchResults.next(results);
  }*/
  updateSearchResults(rides: Ride[]) {
    this.ridese = rides;
    console.log("amir",this.ridese);
  }

  getRidesList() {
    return this.http.get(this.baseUrl + "/getAllRides");
  }
  private formData: any = {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {}
  };
  /*setFormData(data: any) {
    this.formData = data;
  }*/
  setFormData(data: any, step: number) {
    switch (step) {
      case 1:
        this.formData.step1 = { ...this.formData.step1, ...data };
        break;
      case 2:
        this.formData.step2 = { ...this.formData.step2, ...data };
        break;
      case 3:
        this.formData.step3 = { ...this.formData.step3, ...data };
        break;
      case 4:
        this.formData.step4 = { ...this.formData.step4, ...data };
        break;
      case 5:
        this.formData.step5 = { ...this.formData.step5, ...data };
        break;
      case 6:
        this.formData.step6 = { ...this.formData.step6, ...data };
        break;
      default:
        break;
    }
  }
  getFormData() {
    return this.formData;
  }
}
