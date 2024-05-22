import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable, tap } from 'rxjs';
import { Role } from '../model/Role';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'http://localhost:8085/spring2024/';

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/login`, { email, password }, this.httpOptions)
      .pipe(tap(res => {
        if (res && res.accessToken) {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('roles', JSON.stringify(res.roles)); 
          console.log('Token stored');
          
        }
      }));
    
  }
  

  register(user: any): Observable<any> {
    console.log("Sending registration data: ", user); 
    return this.http.post<any>(`${this.baseUrl}auth/signup`, user, this.httpOptions);
  }
  

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); 
    return !!token; 
  }

  getRoles(): Role[] {
    const roles = localStorage.getItem('roles');
    console.log('Roles from storage:', roles);
    return roles ? JSON.parse(roles) : [];
}

  hasRole(role: Role): boolean {
    const roles = this.getRoles();
    console.log('Checking role:', role, 'Available roles:', roles);
    return roles.includes(role);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.router.navigate(['/login']).then(() => {
      window.location.reload(); 
    });
  }

  
}
