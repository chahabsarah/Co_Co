import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../backOffice/userManagement/service/auth.service';
import { Role } from '../backOffice/userManagement/model/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.authService.isLoggedIn(); 
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    const requiredRoles = route.data['roles'] as Role[];
    if (requiredRoles) {
      for (const role of requiredRoles) {
        if (this.authService.hasRole(role)) {
          return true;
        }
      }
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true; 
  }
}
