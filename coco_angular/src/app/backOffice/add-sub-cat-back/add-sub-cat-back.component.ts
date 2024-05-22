import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { NewSubCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-sub-category.service';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';
import { SubCategory } from 'src/app/frontOffice/accommodationModule/models/subCategory';

@Component({
  selector: 'app-add-sub-cat-back',
  templateUrl: './add-sub-cat-back.component.html',
  styleUrls: ['./add-sub-cat-back.component.scss']
})
export class AddSubCatBackComponent implements OnInit {
  subcategory: SubCategory = {} as SubCategory;
    categories: Category[] = [];

  formSubmitted: boolean = false;
  aFormGroup!: FormGroup;
  constructor(private subCategoryService: NewSubCategoryService, private router: Router,private categoryService : NewCategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  addSubCategory(f: NgForm): void {
    this.subCategoryService.addSubCategory(this.subcategory).subscribe(
      response => {
        console.log('SubCategory added successfully:', response);
        this.router.navigate(['/subcat']);

      },
      error => {
        console.error('Error adding subcategory:', error);
      }
    );
  }
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";
}
