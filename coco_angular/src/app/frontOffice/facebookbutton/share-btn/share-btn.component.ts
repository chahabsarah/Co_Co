import { Component, Input } from '@angular/core';
import { Accomodation } from '../../accommodationModule/models/accomodationModel';

@Component({
  selector: 'app-share-btn',
  templateUrl: './share-btn.component.html',
  styleUrls: ['./share-btn.component.scss']
})
export class ShareBtnComponent {
  @Input() accommodation!: Accomodation; // 

  constructor() {
    // You can optionally initialize the property here if needed
  }

  shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://localhost:4200/accommodationF/' + this.accommodation.accommodationID)}`;
    window.open(url, '_blank');

  }
}
