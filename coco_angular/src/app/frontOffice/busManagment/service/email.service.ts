import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private baseUrl: string = 'http://localhost:8085/spring2024';

  constructor(private http: HttpClient) { }

  sendEmail(email: string, subject: string, corp: string): Observable<string> {
    const request = {
      email: email,
      subject: subject,
      corp: corp
    };

    return this.http.post<any>('http://localhost:8085/spring2024/send-email', request, { responseType: 'text' as 'json' });
  }



}
