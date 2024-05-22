import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/room.service';
import { Room, Accomodation } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-add-room-back',
  templateUrl: './add-room-back.component.html',
  styleUrls: ['./add-room-back.component.scss']
})
export class AddRoomBackComponent implements OnInit {
  room: Room = new Room();
  accomodations: Accomodation[] = [];
  formSubmitted: boolean = false;
  selectedAccommodationId!: number;
  roomId!: number; // Add roomId property
  images!: File[];
  aFormGroup!: FormGroup;

  constructor(private roomService: RoomService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.roomService.getAccommodations().subscribe(
      (data: Accomodation[]) => {
        this.accomodations = data;
      },
      error => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }

  add(f: NgForm): void {
    this.formSubmitted = true;
    if (f.valid) {
      this.roomService.addRoomToAccommodation(this.room, this.selectedAccommodationId).subscribe({
        next: (addedRoom: Room) => {
          console.log("Room added successfully!");
          this.roomId = addedRoom.roomID;
          this.uploadImages();
        },
        error: (error) => {
          console.error('Error adding room:', error);
        }
      });
    }
  }

  onFileSelect(event: any): void {
    if (event.target.files) {
      this.images = [];
      for (let i = 0; i < event.target.files.length; i++) {
        this.images.push(event.target.files[i]);
      }
    }
  }

  uploadImages(): void {
    if (!this.roomId || this.images.length === 0) {
      console.log("Room ID or images not available.");
      return;
    }

    // Assuming you have the room ID available as 'roomId'
    this.roomService.uploadImagesToRoom(this.roomId, this.images).subscribe({
      next: (response) => {
        console.log('Images uploaded successfully:', response);
        this.router.navigate(['/room']); // Redirect after uploading images
      },
      error: (error) => {
        console.error('Failed to upload images:', error);
      }
    });
  }
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";
}
