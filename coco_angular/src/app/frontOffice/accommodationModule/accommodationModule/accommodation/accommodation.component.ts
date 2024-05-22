import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts"
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { AccomodationService } from '../Services/accomodation.service';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { Accomodation } from '../../models/accomodationModel'; // Assuming this is the correct model
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileResponse } from '../../models/FileResponse';
import * as saveAs from 'file-saver';
import { FavoriteListService } from '../Services/favorite-list.service';
import { User } from '../../models/UserModel';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
declare var FB: any;
@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {
  accommodations: Accomodation[] = [];
  searchQuery: string = '';
  markerIconUrl = './marker-icon.png';
  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;
  private centroid: L.LatLngExpression = [34, 9];
  accommodation: Accomodation = new Accomodation();
  minRent: number = 80;
  maxRent: number = 7000;
  filteredAccommodations: Accomodation[] = [];
  acc: string = '';
  imageFiles: FileResponse[] = [];
  otherFiles: FileResponse[] = [];
  selectedFile: File | null = null;
  images!: string[];
  FB:any;
  currentUser!: User;

  constructor(private userService: UserService,private modelService: BsModalService,private favoriteListService:FavoriteListService, private accommodationService: AccomodationService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.getCurrentUser();

    this.loadFiles();

    this.fetchAccommodations();
    this.initFacebookSdk();

  }
  getCurrentUser(): void {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.currentUser = user;
        console.log('Utilisateur courant:', this.currentUser);
      });
  }


  addToFavorite(accommodationId: number): void {
    if (!this.currentUser) {
      console.error('Current user not found.');
      return;
    }

    this.favoriteListService.addAccommodationToFavoriteList(this.currentUser.id, accommodationId)
      .subscribe(() => {
        console.log('Accommodation added to favorites successfully.');
      }, (error) => {
        console.error('Error adding accommodation to favorites:', error);
      });
  }
  initFacebookSdk() {
    (window as any).fbAsyncInit = function() {
       FB.init({
         appId: '1576393013206435',
         cookie: true,
         xfbml: true,
         version: 'v19.0'
       });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s) as HTMLScriptElement;
       js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       if (fjs) {
         fjs.parentNode?.insertBefore(js, fjs);
       }
    }(document, 'script', 'facebook-jssdk'));
   }

  loginWithFacebook(): void {
    FB.login((response: any) => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;

        this.sendAccessTokenToBackend(accessToken);
      } else {
        console.log('Connexion annulée ou autorisation refusée.');
      }
    }, {scope: 'public_profile,email'});
  }

  sendAccessTokenToBackend(accessToken: string): void {
    this.http.post<any>('http://localhost:8085/api/spring2024/facebook/token', { accessToken })
      .subscribe(
        (data) => {
          console.log('Jeton d\'accès envoyé avec succès au backend.');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi du jeton d\'accès au backend:', error);
        }
      );
  }

   publishToFacebookPage(accommodation: Accomodation): void {
    const shareMessage = `Découvrez cet hébergement incroyable: ${accommodation.accommodationName},${accommodation.categoryTitle},${accommodation.imageName}, ${accommodation.localisation}, Prix: ${accommodation.rent_price} TND`;
    const pageId = '121706011035540';
    const accessToken = 'EAAPuhuDzbCMBO9I7UKiF6nRBuq7ZAsUjI4xKCShH8N6xKsIGS1WVYJS5klw7sBaisSHtSi4XrnTu3PQ8VlCs8sBu9tbV0OlZBLUG6ei8ZBp2a6yFr24kiji31Pi9rvzHR3rhJdCCOgOLoiZAAZAx38mf1ZAOcZBqwfnuZCZBDGAZB8ovYxjxMlXGXFgbTMQx3o7BNlOvjdUNZAaCesFEc05pMZCwqgNZBG4VjQSGuLEE9ktWx';

    FB.api(
       `/${pageId}/feed`,
       'POST',
       {
         message: shareMessage,
         access_token: accessToken
       },
       function(response: any) {
         if (!response || response.error) {
           console.error('Erreur lors du partage:', response.error);
         } else {
           console.log('Partage réussi !');
         }
       }
    );
   }

  shareOnFacebook(accommodation: Accomodation): void {
    this.publishToFacebookPage(accommodation);
   }


  showMap(localisation: string) {
    this.router.navigate(['/abc'], { queryParams: { localisation} });
  }
  filterByPriceRange(): void {
    this.filteredAccommodations = this.accommodations.filter(acc => acc.rent_price <= this.maxRent && acc.rent_price >= this.minRent);
  }
  applyFilter(): void {
    if (this.acc.trim() === '') {
      this.filteredAccommodations = this.accommodations;
    } else {
      this.filteredAccommodations = this.accommodations.filter(accommodation => {
        return Object.values(accommodation).some(value =>
          value.toString().toLowerCase().includes(this.acc.toLowerCase())
        );
      });
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



  fetchAccommodations() {
    this.accommodationService.getAllAccomodations().subscribe(
      (accommodations: Accomodation[]) => {
        this.accommodations = accommodations;
        this.applyFilter(); // Appliquer le filtre une fois les accommodations récupérées
      },
      error => {
        console.error('Error fetching accommodations:', error);
      }
    );
  }
  onhide() {
    this.modelService.hide(1)
  }

  navigateToUpdateAccomodation(accommodationID: number): void {
    this.router.navigate(['/updateAccomodation', accommodationID]);
  }

  delete(accommodationID: number): void {
    this.accommodationService.deleteAccomodation(accommodationID).subscribe({
      next: () => {
        console.log('Accomodation deleted successfully!');
        this.fetchAccommodations();
      },
      error: (err: any) => {
        console.error('Error deleting Accomodation:', err);
      }
    });
  }

  generateQRCode(accommodation: Accomodation): string {
    const qrContent = `${accommodation.rent_price}\n${accommodation.rules}\n${accommodation.numberOfRoom}\n${accommodation.localisation}`;
    let qrCodeUrl: string = '';
    QRCode.toDataURL(qrContent, { errorCorrectionLevel: 'H' }, (err: any, url: string) => {
      if (err) {
        console.error(err);
      } else {
        qrCodeUrl = url;
      }
    });
    return qrCodeUrl;
  }

  generatePDF(accommodation: Accomodation) {
    const qrContent = `${accommodation.rent_price}\n${accommodation.rules}\n${accommodation.numberOfRoom}\n${accommodation.localisation}`;

    QRCode.toDataURL(qrContent, (err: any, qrDataURL: string) => {
      if (err) {
        console.error('Error generating QR code:', err);
        return;
      }

      const docDefinition: TDocumentDefinitions = {
        content: [
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                [{ text: 'Accommodation Information', colSpan: 2, style: 'header' }, ''],
                ['Rent Price:', { text: accommodation.rent_price, style: 'cell' }],
                ['Rules:', { text: accommodation.rules, style: 'cell' }],
                ['Number of Rooms:', { text: accommodation.numberOfRoom, style: 'cell' }],
                ['Location:', { text: accommodation.localisation, style: 'cell' }],
                [{ image: qrDataURL, colSpan: 2, width: 100, alignment: 'center', margin: [0, 20] }, '']
              ]
            }
          }
        ],
        styles: {
          header: {
            fontSize: 24,
            bold: true,
            alignment: 'center',
            fillColor: '#3f51b5',
            color: '#ffffff',
            margin: [0, 0, 0, 20]
          },
          cell: {
            fontSize: 16,
            bold: false,
            fillColor: '#f5f5f5',
            margin: [0, 5, 0, 5]
          }
        }
      };

      pdfMake.createPdf(docDefinition).open();
    });
  }

  navigateToViewDetails(accommodationID: number): void {
    console.log('Accomodation ID:', accommodationID);
    this.router.navigate(['/getAccomodationByIdF', accommodationID]);
  }
}
