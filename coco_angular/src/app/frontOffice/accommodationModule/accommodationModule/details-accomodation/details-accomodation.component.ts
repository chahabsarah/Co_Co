import { Component, OnInit } from '@angular/core';
import { Accomodation } from '../../models/accomodationModel';
import { AccomodationService } from '../Services/accomodation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as saveAs from 'file-saver';
import { FileResponse } from '../../models/FileResponse';

@Component({
  selector: 'app-details-accomodation',
  templateUrl: './details-accomodation.component.html',
  styleUrls: ['./details-accomodation.component.scss']
})
export class DetailsAccomodationComponent  implements OnInit{
  accomodation: Accomodation = new Accomodation();
  imageFiles: FileResponse[] = [];
  otherFiles: FileResponse[] = [];
  selectedFile: File | null = null;
  images!: string[];
  constructor(private accomodationService: AccomodationService, private router: Router, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const accommodationID = Number(params.get('id'));
      this.accomodationService.getAccomodationById(accommodationID).subscribe(accomodation => {
        this.accomodation = accomodation;
      });
    });
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
