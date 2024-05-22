import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../Services/category.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AccomodationService } from '../Services/accomodation.service';
import { Router } from '@angular/router';
import {Accomodation} from '../../models/accomodationModel'
import { Category } from '../../models/category';
import { NewCategoryService } from '../Services/new-category.service';
@Component({
  selector: 'app-add-accommodation',
  templateUrl: './add-accommodation.component.html',
  styleUrls: ['./add-accommodation.component.scss']
})
export class AddAccommodationComponent implements OnInit{


  constructor(private accomodationService :AccomodationService , private router: Router, private formBuilder: FormBuilder ,private categoryService: NewCategoryService) { }
  categories: Category[] = [];

  accomodation: Accomodation = new Accomodation();
  formSubmitted: boolean = false;
  selectedImage: File | null = null;


  ngOnInit(): void {
    this.loadCategories();

  }
  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }
  add(f: NgForm): void {
    if (!this.accomodation.categoryID) {
      console.error("Category ID is not defined");
      return; 
    }

    const selectedCategory = this.categories.find(category => category.categoryID === this.accomodation.categoryID);
    if (selectedCategory) {
      this.accomodation.categoryTitle = selectedCategory.categoryTitle;
    }

    this.accomodationService.addAccomodation(this.accomodation, this.accomodation.categoryID).subscribe(
      (response: Accomodation) => {
        console.log('Accommodation added successfully:', response);
        if (this.selectedImage) {
          this.uploadImage(response.accommodationID);
        } else {
          console.log('error uploading image!');
        }
        this.router.navigate(['/accommodationF']);


      },
      (error) => {
        console.error('Error adding accommodation:', error);
      }
    );
  }
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  uploadImage(accomodationId: number) {
    if (this.selectedImage) {
      this.accomodationService.uploadImage(accomodationId, this.selectedImage).subscribe(
        (response: any) => {
          console.log('Image added successfully: ', response);
        },
        (error) => {
          console.error('Error adding image: ', error);
        }
      );
    }
  }
}
