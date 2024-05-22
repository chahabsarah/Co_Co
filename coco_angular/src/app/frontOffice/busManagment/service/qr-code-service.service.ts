import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeServiceService {

  private baseUrl = 'http://localhost:8085/spring2024/qr/qrcode/'; 

  constructor(private http: HttpClient) { }

  generateQrCode(content: string): Observable<Blob> {
    const url = `${this.baseUrl}${content}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
