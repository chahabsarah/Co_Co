import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccomodationService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/accomodation.service';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { Accomodation } from 'src/app/frontOffice/accommodationModule/models/accomodationModel';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';

@Component({
  selector: 'app-add-acc-back',
  templateUrl: './add-acc-back.component.html',
  styleUrls: ['./add-acc-back.component.scss']
})
export class AddAccBackComponent implements OnInit{


  constructor(private accomodationService :AccomodationService , private router: Router, private formBuilder: FormBuilder ,private categoryService: NewCategoryService,) { }
  categories: Category[] = [];
  aFormGroup!: FormGroup;
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
    // Vérifier si la valeur de this.accommodation.categoryID est définie
    if (!this.accomodation.categoryID) {
      console.error("Category ID is not defined");
      return; // Arrêter l'exécution si categoryID n'est pas défini
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
        this.router.navigate(['/accomodation']);

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


  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";

}
