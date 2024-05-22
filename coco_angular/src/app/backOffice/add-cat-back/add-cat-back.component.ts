import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';

@Component({
  selector: 'app-add-cat-back',
  templateUrl: './add-cat-back.component.html',
  styleUrls: ['./add-cat-back.component.scss']
})
export class AddCatBackComponent implements OnInit {
  category: Category = new Category();
  formSubmitted: boolean = false;
  aFormGroup!: FormGroup;
  constructor(private categoryService: NewCategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  addCategory(f: NgForm): void {
    this.categoryService.addCategory(this.category).subscribe(
      response => {
        console.log('Category added successfully:', response);
        this.router.navigate(['/cat']);
      },
      error => {
        console.error('Error adding category:', error);
      }
    );
  }
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";

}
