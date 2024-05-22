import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {Room} from "../../models/roomModel"
import { RoomService } from '../Services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit{

  room: Room = new Room();
  formSubmitted: boolean = false;
  id: number;



  constructor(    private route: ActivatedRoute,
    private roomService: RoomService, private router: Router, private formBuilder: FormBuilder)
  {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

  }
  update(f: NgForm): void {
    this.roomService.updateRoom(this.id,this.room).subscribe(
      response => {
        console.log('Room updated successfully:', response);
        this.router.navigate(['/getAllRoom'])

      },
      error => {
        console.error('Error adding room:', error);
      }
    );
  }
}

