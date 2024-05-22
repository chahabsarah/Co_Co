import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pictureproduct} from "../pictureproduct";

@Injectable({
  providedIn: 'root'
})
export class PictureproductService {

  constructor(private httpClient : HttpClient) { }
  public list():Observable<Pictureproduct[]>{
    return this.httpClient.get<Pictureproduct[]>('http://localhost:8085/spring2024/list/pic')
  }
  public upload(image:File):Observable<any>{
    const formData = new  FormData();
    formData.append('multipartFile',image);
    return this.httpClient.post<any>('http://localhost:8085/spring2024/upload',formData);
  }
  public delete(idpicture: number): Observable<any> {
    return this.httpClient.delete('http://localhost:8085/spring2024/deletePic/' + idpicture);
  }
  public getLastImage(): Observable<Pictureproduct> {
    return this.httpClient.get<Pictureproduct>('http://localhost:8085/spring2024/lastImage');
  }
  public getLastPictureId(): Observable<number> {
    return this.httpClient.get<number>('http://localhost:8085/spring2024/last-id/picture');
  }

}
