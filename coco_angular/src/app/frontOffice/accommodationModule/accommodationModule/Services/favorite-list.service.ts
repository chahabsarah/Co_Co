import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Accomodation } from '../../models/accomodationModel';

@Injectable({
  providedIn: 'root'
})
export class FavoriteListService {

  private apiUrl = 'http://localhost:8085/spring2024/api/favorite-list';

  constructor(private http: HttpClient) { }

  addAccommodationToFavoriteList(userId: number, accommodationId: number): Observable<void> {
    const url = `${this.apiUrl}/${userId}/favorites/${accommodationId}`;
    return this.http.post<void>(url, null)
      .pipe(
        catchError((error: any) => {
          // Handle error
          console.error('Error adding accommodation to favorite list:', error);
          throw error; // Rethrow the error to be handled by the caller
        })
      );
  }
  getFavoriteListByUserId(userId: number): Observable<Accomodation[]> {
    const url = `${this.apiUrl}/${userId}/favorites`;
    return this.http.get<Accomodation[]>(url)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching favorite list:', error);
          throw error;
        })
      );
  }
}
