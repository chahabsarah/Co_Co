import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

export interface UserRoleStatistic {
  roleName: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private baseUrl:string = 'http://localhost:8085/spring2024/';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUserRoleStatistics(): Observable<UserRoleStatistic[]> {
    return this.http.get<UserRoleStatistic[]>(`${this.baseUrl}stats/roles`, this.httpOptions).pipe(
      tap(data => console.log('Received data:', data)), 
      catchError(error => {
        console.error('Error fetching role statistics:', error);
        return throwError(() => error); 
      })
    );
  }
  

}
