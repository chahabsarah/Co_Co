import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CategoryService } from '../Services/category.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NewCategoryService } from '../Services/new-category.service';
import { Category } from '../../models/category';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  category: Category = new Category();
  formSubmitted: boolean = false;
  id!: number;
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router: Router,private catservice:CategoryService,private categoryService:NewCategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Assurez-vous que le nom correspond à celui défini dans la route
      // Chargez les détails de la catégorie en utilisant this.id
    });
  }



  update(f: NgForm): void {
    this.categoryService.updateCategory(this.id,this.category).subscribe(
      response => {
        console.log('category updated successfully:', response);
        this.router.navigate(['/getAllCategories'])

      },
      error => {
        console.error('Error adding category:', error);
      }
    );
  }

}
