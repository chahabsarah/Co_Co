import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../Environements/environement";
import {Observable} from "rxjs";
import {Image} from "../../Models_Front/Image";
import {Car} from "../../Models_Front/Car";

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private apiUrlo = 'http://localhost:8085/upload';
  constructor(private  http:HttpClient) { }
  baseUrl = environment.API_BASE_URL;
  createImage(image: Image) {
    return this.http.post(this.baseUrl + "/addImage", image);
  }
  /*updateCar(car: Car) {
    return this.http.put(this.baseUrl + "/updateCar", car);
  }*/
  /*updateCar(p:Car,id:number){
    return this.http.put('http://localhost:8085/updateCar'+'/'+id,p)
  }*/
  update(imageID: number, updatedImage: Image): Observable<Image> {
    return this.http.patch<Image>("http://localhost:8085/updateImage/" + imageID, updatedImage);
  }
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
    const headers = new HttpHeaders();
    return this.http.post<any>(this.apiUrlo, formData, { headers: headers });
  }
  deleteImage(imageID:number) {
    return this.http.delete(this.baseUrl + "/deleteImage/" + imageID);
  }
  /*getCar(carID:number) {
   // return this.http.get(this.baseUrl + "/getCarById/" + carID);
    return this.http.get<Car>('http://localhost:8085/getCarById/'+carID)
  }*/
  /*getImage(imageId:number){
    return this.http.get<Image>('http://localhost:8085/getImageById/'+imageId)
  }*/
  getImage(imageId: number): Observable<Image> {
    const url = `http://localhost:8085/getImageById/${imageId}`;
    return this.http.get<Image>(url);
  }
  getProductById(imageId:number){
    return this.http.get<Image>('http://localhost:8085/getImageById'+'/'+imageId)
  }
  getImagesList() {
    return this.http.get(this.baseUrl + "/getAllImages");
  }
  getImageByCarID(carID: number): Observable<Car> {
    return this.http.get<Car>(`${this.baseUrl}/images/${carID}`);
  }
  affectImageToCar(imageID: number, carID: number): Observable<string> {
    let params = new HttpParams()
      .set('imageID', imageID.toString())
      .set('carID', carID.toString());
    return this.http.post<string>(this.baseUrl + '/affectImageToCar', {}, { params });
  }
  /*getImagePathe(carID: number): Observable<string> {
    return this.http.get<string>(`http://localhost:8085/car/${carID}/imagePath`);
  }*/
  getImagePath(carID: number): Observable<string> {
    // Use the carID to construct the image URL
    return this.http.get<string>(`${this.baseUrl}/imagePath/${carID}`);
  }
}
