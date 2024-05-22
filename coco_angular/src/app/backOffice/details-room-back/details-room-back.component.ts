import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/room.service';
import { Room } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-details-room-back',
  templateUrl: './details-room-back.component.html',
  styleUrls: ['./details-room-back.component.scss']
})
export class DetailsRoomBackComponent {
  room: Room = new Room();
  roomImages: string[] = [];

  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const roomID = Number(params.get('id'));
      this.roomService.getRoomById(roomID).subscribe(room => {
        this.room = room;
        this.loadRoomImages(roomID); // Load room images after getting room details
      });
    });
  }

  loadRoomImages(roomID: number): void {
    this.roomService.getImagesForRoom(roomID).subscribe(images => {
      this.roomImages = images;
    });
  }
}


