import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Room } from "../../models/roomModel";
import { Accomodation } from '../../models/accomodationModel';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomId!: number;
  room: any;
  private apiUrl = 'http://localhost:8085/spring2024/api/rooms';

  constructor(private http: HttpClient) { }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.apiUrl}/addRoom`, room);
  }


  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/getRoomById/${id}`);
  }

  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiUrl}/updateRoom/${id}`, room);
  }

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteRoom/${id}`);
  }

  getAccommodations(): Observable<Accomodation[]> {
    return this.http.get<Accomodation[]>(`${this.apiUrl}/getAccommodations`);
  }

  addRoomToAccommodation(room: Room, accommodationId: number): Observable<Room> {
    return this.http.post<Room>(`${this.apiUrl}/addRoomToAccommodation/${accommodationId}`, room);
  }

  getAccommodationNameByRoomId(roomId: number): Observable<string> {
    return this.http.get(`${this.apiUrl}/${roomId}/accommodationName`, { responseType: 'text' });
  }

  //*****************image part ********************* */

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/getAllRoom`).pipe(
      switchMap(rooms => {
        const observables: Observable<string[]>[] = rooms.map(room => {
          return this.getImagesForRoom(room.roomID);
        });
        return forkJoin(observables).pipe(
          map(imageUrlsArray => {
            rooms.forEach((room, index) => {
              room.imageUrls = imageUrlsArray[index];
            });
            return rooms;
          })
        );
      })
    );
  }
  // getAllRooms(): Observable<Room[]> {
  //   return this.http.get<Room[]>(`${this.apiUrl}/getAllRoom`);
  // }

  getImagesForRoom(roomID: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${roomID}/images`);
  }


  // uploadImagesToRoom(roomID: number, images: FileList): Observable<HttpEvent<Room>> {
  //   const formData: FormData = new FormData();
  //   for (let i = 0; i < images.length; i++) {
  //     formData.append('images', images[i]);
  //   }

  //   const req = new HttpRequest('POST', `${this.apiUrl}/get/${roomID}/images`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }
  uploadImagesToRoom(roomID: number, images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    return this.http.post<any>(`${this.apiUrl}/addImages/${roomID}/images`, formData);
  }
}
