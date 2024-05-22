import { Component } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Role } from '../model/Role';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();
  displayRoleSelection: boolean = false;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  gender: ['', [Validators.required]], 
  address: ['', [Validators.required]], 
  dateOfBirth: ['', [Validators.required]],
  phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]], 
  //pictureUrl: [''], 
  role: [[]]
  });


  onFileSelect(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      
    }
  }
  
  ngOnInit(): void {
    this.registerForm.get('email')!.valueChanges.subscribe(email => {
      const emailDomain = email.split('@')[1];
      this.displayRoleSelection = emailDomain === 'esprit.tn';

      // mech esprit.tn direct external user
      if (!this.displayRoleSelection) {
        this.registerForm.get('role')!.setValue(['EXTERNAL_USER']);
        this.registerForm.get('role')!.disable(); 
      } else {
        this.registerForm.get('role')!.enable(); 
      }
    });
  }

  register(): void {
    let formData = this.registerForm.value;
  const emailDomain = formData.email.split('@')[1];
  
  if (emailDomain !== 'esprit.tn') {
    formData.role = ['EXTERNAL_USER'];
  } else {
    formData.role = Array.isArray(formData.role) ? formData.role : [formData.role];
  }

    this.authService.register(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Inscription réussie',
          text: 'Vous pouvez maintenant vous connecter',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Une erreur est survenue lors de l\'inscription',
          footer: 'Veuillez réessayer'
        });
      }
    });
  }
  

}