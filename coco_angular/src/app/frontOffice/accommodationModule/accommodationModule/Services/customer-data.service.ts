import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerData } from '../../models/CustomerDataModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private baseUrl = 'http://localhost:8085/spring2024/apistripe';

  constructor(private http: HttpClient) { }

  createCustomer(customerData: CustomerData): Observable<CustomerData> {
    return this.http.post<CustomerData>(`${this.baseUrl}/createcustomer`, customerData);
  }
  initiatePayment(customerId: string, amount: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/makepayment`, { customerId, amount });
  }

}
