import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/category.service';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';

@Component({
  selector: 'app-update-cat-back',
  templateUrl: './update-cat-back.component.html',
  styleUrls: ['./update-cat-back.component.scss']
})
export class UpdateCatBackComponent implements OnInit {
  category: Category = new Category();
  formSubmitted: boolean = false;
  id!: number;
  aFormGroup!: FormGroup;
  siteKey : string="6LeBnZUpAAAAAEDMtn5PQAEpTInPp0rB_fR60D-A";
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
        this.router.navigate(['/cat'])

      },
      error => {
        console.error('Error adding category:', error);
      }
    );
  }

}

