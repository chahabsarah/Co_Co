import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() idProduct!: number;

  ratingcount = 0;
  totalrating = 0;
  Finalrating: any;

  ratingcontrol = new FormControl(0);

  constructor() {}

  ngOnInit(): void {
    // Retrieve rating data from localStorage
    const savedRating = localStorage.getItem(`rating_${this.idProduct}`);
    if (savedRating) {
      const { totalrating, ratingcount } = JSON.parse(savedRating);
      this.totalrating = totalrating;
      this.ratingcount = ratingcount;
      this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2);
    }
  }

  GetRating() {
    this.ratingcount++;
    this.totalrating += this.ratingcontrol?.value || 0;
    this.Finalrating = (this.totalrating / this.ratingcount).toFixed(2);

    // Save rating data to localStorage
    localStorage.setItem(`rating_${this.idProduct}`, JSON.stringify({
      totalrating: this.totalrating,
      ratingcount: this.ratingcount
    }));
  }
}
