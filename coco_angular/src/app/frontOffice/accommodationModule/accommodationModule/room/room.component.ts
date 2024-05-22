import { Component, OnInit } from '@angular/core';
import { RoomService } from '../Services/room.service';
import { Room } from '../../models/roomModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as saveAs from 'file-saver';
import { Accomodation } from '../../models/accomodationModel';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import { User } from '../../models/UserModel';
import { CustomerDataService } from '../Services/customer-data.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
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
rent!:Room;
currentUser!: User;
bookingPrice: number=20;

  constructor(private route: ActivatedRoute, private customerDataService: CustomerDataService,private roomService: RoomService, private userService: UserService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentUser();

    this.fetchRooms();
    this.initializeRoomImages();
    this.route.queryParams.subscribe(params => {
      this.rent = params['rent'];
      console.log("room rent", this.rent);
    });


  }
  getCurrentUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        console.log('Utilisateur courant:', this.currentUser);
      });
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
    console.log("*****");
    this.roomService.getAllRooms().subscribe(
      rooms => {
        this.rooms = rooms;
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


  deleteRoom(roomID: number): void {
    this.roomService.deleteRoom(roomID).subscribe(
      () => {
        console.log('Room deleted successfully');
        this.fetchRooms();
      },
      error => {
        console.error('Error deleting room:', error);
      }
    );
  }

  editRoom(roomID: number): void {
    this.router.navigate(['/updateF', roomID]);
  }
  navigateToViewDetails( roomID:number):void{ console.log('Room ID:', roomID);
  this.router.navigate(['/getRoomByIdF', roomID]);
}



openCreateCustomer(): void {

  this.router.navigate(['/create-customer']); // Navigate to the create customer route
}
}
