import { Component } from '@angular/core';
import { UserSService } from '../service/user-s.service';
import Swal from 'sweetalert2';
import { Role } from '../model/Role';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  users: any[] = []; 
  searchTerm: string = '';
  private searchTerm$ = new Subject<string>();

  constructor(private userService: UserSService) {}

  ngOnInit(): void {
    this.loadAllUsers();

    this.searchTerm$.pipe(
      debounceTime(100), 
      distinctUntilChanged(), 
      switchMap((searchTerm: string) => this.userService.searchUsers(searchTerm))
    ).subscribe({
      next: (response) => {
        this.users = response; // Update with search result
      },
      error: (error) => {
        console.error('Error fetching users', error);
        Swal.fire('Error', 'There was a problem fetching the users.', 'error');
      }
    });
  }

  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error('Error fetching users', error);
        Swal.fire('Error', 'There was a problem fetching the users.', 'error');
      }
    });
  }

  onSearchTermChange(searchTerm: string): void {
    if(searchTerm) {
      this.searchTerm$.next(searchTerm);
    } else {
      this.loadAllUsers();
    }
  }
  
  deleteUser(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe({
          next: () => {
            console.log('User deleted successfully');
            // Optionally, refresh the list of users or remove the deleted user from the local array
            this.users = this.users.filter(user => user.id !== id);
            // Show a success message
            Swal.fire(
              'Deleted!',
              'The user has been deleted.',
              'success'
            );
          },
          error: (error) => {
            console.error('Error deleting user', error);
            // Optionally, show an error message
            Swal.fire(
              'Failed!',
              'There was a problem deleting the user. Please try again.',
              'error'
            );
          },
        });
      }
    });
  }

}
