import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewCategoryService } from '../Services/new-category.service';
import { Category } from '../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  category: Category = new Category();
  formSubmitted: boolean = false;

  constructor(private categoryService: NewCategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  addCategory(f: NgForm): void {
    this.categoryService.addCategory(this.category).subscribe(
      response => {
        console.log('Category added successfully:', response);
        this.router.navigate(['/getAllCategories']);
      },
      error => {
        console.error('Error adding category:', error);
      }
    );
  }
}
