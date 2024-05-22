import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accomodation } from '../../models/accomodationModel'
import { User } from '../../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AccomodationService {
  private apiUrl = 'http://localhost:8085/spring2024/api/accommodations';

  constructor(private http: HttpClient) { }

  getAllAccomodations(): Observable<Accomodation[]> {
    return this.http.get<Accomodation[]>(`${this.apiUrl}/getAllAccomodation`);
  }

  getAccomodationById(id: number): Observable<Accomodation> {
    return this.http.get<Accomodation>(`${this.apiUrl}/getAccomodationById/${id}`);
  }

  addAccomodation(accomodation: Accomodation, categoryId: number): Observable<Accomodation> {
    const body = { ...accomodation, categoryId: categoryId };
    return this.http.post<Accomodation>(`${this.apiUrl}/addAccomodation/${categoryId}`, accomodation);
  }


  updateAccomodation(id: number, accomodation: Accomodation): Observable<Accomodation> {
    return this.http.put<Accomodation>(`${this.apiUrl}/update/${id}`, accomodation);
  }

  deleteAccomodation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAccomodation/${id}`);
  }
  getAccommodationLocation(id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getLocation/${id}`);
  }
  addCategoryToAccommodation(accommodationId: number, categoryId: number): Observable<Accomodation> {
    const body = { categoryId: categoryId };
    return this.http.post<Accomodation>(`${this.apiUrl}/${accommodationId}/addCategoryToAccommodation`, body);
  }
  getAccommodationByIdWithCategory(id: number): Observable<Accomodation> {
    return this.http.get<Accomodation>(`${this.apiUrl}/getAccomodationByIdWithCategory/${id}`);
  }
  uploadImage(accomodationId: number, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post(`${this.apiUrl}/${accomodationId}/image`, formData);
  }
  getImageForAcc(accomodationId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${accomodationId}/image`, { responseType: 'blob' });
  }
  private formData: any = {};
  setFormData(data: any) {
    this.formData = data;
  }
 
}
