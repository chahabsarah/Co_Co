import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/room.service';
import { Accomodation, Room } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-room-back',
  templateUrl: './room-back.component.html',
  styleUrls: ['./room-back.component.scss']
})
export class RoomBackComponent implements OnInit {
  rooms: Room[] = [];
  selectedImage: File | null = null;
imagePaths: any;
accomodations: Accomodation[] = [];

priceRange!: string;
minRent: number = 80;
maxRent: number = 7000;
filteredRooms: Room[] = [];
roomImages: { [roomId: number]: string[] } = {};
currentImageIndex: number = 0;
room: any;
  constructor(private roomService: RoomService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRooms();
    this.initializeRoomImages(); // Appeler la méthode d'initialisation des images

  }
  initializeRoomImages(): void {
    this.rooms.forEach(room => {
      this.roomImages[room.roomID] = room.imageUrls;
    });
  }
  filterRooms(): void {
    if (this.room) {
      this.filteredRooms = this.rooms.filter(room =>
        room.roomType.toLowerCase().includes(this.room.toLowerCase())
      );
    } else {
      this.filteredRooms = this.rooms;
    }
  }
  // Dans votre fichier TypeScript
activeImageIndex = 0;

nextImage() {
  if (this.room && this.room.imageUrls) {
     this.activeImageIndex = (this.activeImageIndex + 1) % this.room.imageUrls.length;
  } else {
     console.error('Room or imageUrls is undefined');
  }
 }


previousImage() {
 this.activeImageIndex = (this.activeImageIndex - 1 + this.room.imageUrls.length) % this.room.imageUrls.length;
}

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.rooms = rooms;
        this.fetchAccommodationNames();
        this.filterRooms();

      },
      error => {
        console.error('Error fetching rooms:', error);
      }
    );
  }
  filterByHighestRent() {
    this.rooms.sort((a, b) => b.rent - a.rent);
  }

  filterByLowestRent() {
    this.rooms.sort((a, b) => a.rent - b.rent);
  }

filterByPriceRange() {
  this.filteredRooms = this.rooms.filter(room => room.rent >= this.minRent && room.rent <= this.maxRent);
}

  fetchAccommodationNames(): void {
    for (const room of this.rooms) {
      this.roomService.getAccommodationNameByRoomId(room.roomID).subscribe(
        name => {
          room.accommodationName = name;
        },
        error => {
          console.error('Error fetching accommodation name:', error);
        }
      );
    }
  }


  deleteRoom(roomID: number): void {
    this.roomService.deleteRoom(roomID).subscribe(
      () => {
        console.log('Room deleted successfully');
        this.fetchRooms();
        this.router.navigate(['/room'])
      },
      error => {
        console.error('Error deleting room:', error);
      }
    );
  }

  editRoom(roomID: number): void {
    this.router.navigate(['/updateRoom', roomID]);
  }
  navigateToViewDetails( roomID:number):void{ console.log('Room ID:', roomID);
  this.router.navigate(['/getRoomById', roomID]);
}

}
