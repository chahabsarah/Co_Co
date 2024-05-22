import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/backOffice/userManagement/service/auth.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.scss']
})
export class HeaderFrontComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
