import { Component } from '@angular/core';
import { UserSService } from 'src/app/backOffice/userManagement/service/user-s.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  user: any = {}; 
  isEditing = false;

  constructor(private userService: UserSService) { }

  ngOnInit(): void {
    this.userService.getMyProfile().subscribe({
      next: (profile) => {
        this.user = profile;
      },
      error: (error) => {
        console.error('Error fetching profile', error);
      }
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    this.userService.updateProfile(this.user).subscribe({
      next: (response) => {
        console.log("Profile updated successfully:", response);
        this.isEditing = false; 
      },
      error: (error) => {
        console.error("Error updating profile:", error);
      }
    });
  }

}
