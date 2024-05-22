import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewSubCategoryService } from '../Services/new-sub-category.service';
import { Router } from '@angular/router';
import { SubCategory } from '../../models/subCategory';
import { Category } from '../../models/category';
import { NewCategoryService } from '../Services/new-category.service';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  subcategory: SubCategory = {} as SubCategory;
    categories: Category[] = []; // Assuming 'Category' is the correct type

  formSubmitted: boolean = false;

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
        this.router.navigate(['/getAllSubCategories']);

      },
      error => {
        console.error('Error adding subcategory:', error);
      }
    );
  }
}
