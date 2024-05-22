import { Component } from '@angular/core';
import { UserSService } from '../service/user-s.service';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User(); 

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        // Navigate based on role
        const userRole = response.roles[0];
        if(userRole === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if(userRole === 'EXTERNAL_USER') {
          this.router.navigate(['/external-user']);
        } else {
          this.router.navigate(['/coco']);
        }
  
        // Show a success alert
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (err) => {
        console.error('Login error', err);
        // Show an error alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid login credentials. Please try again!',
          footer: '<a href="/forgot-password">Forgot your password?</a>'
        });
      }
    });
  }
}
