import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {Room} from "../../models/roomModel"
import { RoomService } from '../Services/room.service';
import { Router } from '@angular/router';
import { Accomodation } from '../../models/accomodationModel';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  room: Room = new Room();
  accomodations: Accomodation[] = [];
  formSubmitted: boolean = false;
  selectedAccommodationId!: number;
  roomId!: number; // Add roomId property
  images!: File[];

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
          this.roomId = addedRoom.roomID; // Assign roomId after adding room
          this.uploadImages(); // Upload images after room is added
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

    this.roomService.uploadImagesToRoom(this.roomId, this.images).subscribe({
      next: (response) => {
        console.log('Images uploaded successfully:', response);
        this.router.navigate(['/getAllRoom']); // Redirect after uploading images
      },
      error: (error) => {
        console.error('Failed to upload images:', error);
      }
    });
  }
}
