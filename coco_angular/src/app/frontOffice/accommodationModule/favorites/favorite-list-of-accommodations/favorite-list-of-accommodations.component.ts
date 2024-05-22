import { Component, OnInit } from '@angular/core';
import { FavoriteListService } from '../../accommodationModule/Services/favorite-list.service';
import { Accomodation } from '../../models/accomodationModel';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import { User } from '../../models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileResponse } from '../../models/FileResponse';
import * as saveAs from 'file-saver';


@Component({
  selector: 'app-favorite-list-of-accommodations',
  templateUrl: './favorite-list-of-accommodations.component.html',
  styleUrls: ['./favorite-list-of-accommodations.component.scss']
})
export class FavoriteListOfAccommodationsComponent implements OnInit {
  favoriteAccommodations: Accomodation[] = [];
  currentUser!: User;
userId!:string;
imageFiles: FileResponse[] = [];
otherFiles: FileResponse[] = [];
selectedFile: File | null = null;
images!: string[];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private favoriteListService: FavoriteListService,
  private router: Router,
  private http: HttpClient){ }

  ngOnInit(): void {

    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(
      user => {
        this.currentUser = user;
        console.log('Utilisateur courant:', this.currentUser);
        // Appel à getFavoriteList() une fois que l'utilisateur est récupéré
        this.getFavoriteList();
      },
      error => {
        console.error('Error fetching current user:', error);
      }
    );
  }

  getFavoriteList(): void {
    if (this.currentUser) {
      this.favoriteListService.getFavoriteListByUserId(this.currentUser.id).subscribe(
        (favorites: Accomodation[]) => {
          this.favoriteAccommodations = favorites;
        },
        error => {
          console.error('Error fetching favorite list:', error);
        }
      );
    } else {
      console.error('Current user is not defined.');
    }
  }
  uploadImage() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:8085/spring2024/api/accommodations/{accomodationId}/image', formData).subscribe(
        (response: any) => {
          console.log('image added successfully: ', response);
          this.selectedFile = null;
          this.loadFiles();
        },
        (error) => {
          console.error('Error adding file: ', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }
  isImage(fileName: string): boolean {
    return !!fileName && (fileName.endsWith('.png') || fileName.endsWith('.jpg') || fileName.endsWith('.avif') || fileName.endsWith('.svg'));
  }

  loadFiles() {
    this.http.get<FileResponse[]>('http://localhost:8085/spring2024/api/accommodations/getAllAccomodation').subscribe(
      (response) => {
        this.imageFiles = response.filter(file => this.isImage(file.fileName));
        this.otherFiles = response.filter(file => !this.isImage(file.fileName));
      },
      (error) => {
        console.error('Erreur lors du chargement des fichiers : ', error);
      }
    );
  }

  openImage(filename: string) {
    const headers = new HttpHeaders().set('Accept', 'application/avif'); // Adjust content type as needed
    this.http.get(`http://localhost:8085/spring2024/api/accommodations/{accomodationId}/image`, { headers, responseType: 'blob' })
      .subscribe(
        (blob) => {
          const file = new Blob([blob], { type: 'application/avif' }); // Adjust content type as needed
          saveAs(file, filename);
        },
        (error) => {
          console.error('Erreur lors de l\'ouverture du fichier : ', error);
        }
      );
  }

}
