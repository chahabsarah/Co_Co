import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../Environements/environement";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private apiUrl = 'http://localhost:8085/upload';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<string>(this.apiUrl, formData);
  }


  /*private apiUrl = 'http://localhost:8086/upload';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<string>(this.apiUrl, formData);

  }
  uploadFile(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<string>(this.apiUrl, formData, { observe: 'response' })
      .pipe(
        map(response => response.body as string),
        catchError(error => {
          console.error(error);
          return throwError('Error uploading file');
        })
      );
  }*/
}
