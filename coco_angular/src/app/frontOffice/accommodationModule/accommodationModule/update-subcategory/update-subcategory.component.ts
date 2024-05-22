import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NewSubCategoryService } from '../Services/new-sub-category.service';
import { SubCategory } from '../../models/subCategory';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { NewCategoryService } from '../Services/new-category.service';

@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.scss']
})
export class UpdateSubcategoryComponent implements OnInit {
  subcategory: SubCategory = {} as SubCategory;
  formSubmitted: boolean = false;
  id!: number;
  categories: Category[] = []; // Assuming 'Category' is the correct type

  constructor(private fb:FormBuilder,private subcategoryService :NewSubCategoryService,private route: ActivatedRoute, private router: Router,private categoryService : NewCategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id); 

      this.categoryService.getAllCategories().subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        },
        error => {
          console.error('Error fetching categories:', error);
        }
      );
    });
  }



  update(f: NgForm): void {
    this.subcategoryService.updateSubCategory(this.id,this.subcategory).subscribe(
      response => {
        console.log('subcategory updated successfully:', response);
        this.router.navigate(['/getAllSubCategories'])

      },
      error => {
        console.error('Error adding subcategory:', error);
      }
    );
  }

}
