import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryProduct } from '../subcategory-product';
import { SubcategoryProductService } from '../MarketPlaceService/subcategory-product.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.scss']
})
export class EditSubcategoryComponent implements OnInit {
  subcategoryId!: number;
  subcategory!: SubCategoryProduct;
  editedSubCategoryName: string = '';
  showAlert = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private subcategoryService: SubcategoryProductService
  ) {}

  ngOnInit() {
    // Retrieve subcategory ID from route parameters
    this.route.params.subscribe(params => {
      this.subcategoryId = +params['idSubCategory'];
      // Fetch subcategory details based on the ID
      this.subcategoryService.getSubCategoryProductById(this.subcategoryId).subscribe(subcategory => {
        this.subcategory = subcategory;
        this.editedSubCategoryName = subcategory.subCategoryName; // Initialize the editedSubCategoryName with the current value
      });
    });
  }

  saveEditedCategory() {
    // Update the subcategory name
    this.subcategory.subCategoryName = this.editedSubCategoryName;
    this.showAlert = true;

    // Call the updateSubCategoryProduct method from the service with the subcategory object
    this.subcategoryService.updateSubCategoryProduct(this.subcategory, this.subcategory.idSubCategory).subscribe(
        updatedCategory => {
          console.log('Subcategory updated successfully:', updatedCategory);
          // Redirect to the subcategory list or any other page after update
          this.router.navigate(['/subcategory-list']);
        },
        error => {
          console.error('Error updating subcategory:', error);
        }
    );
  }

  closeAlert() {
    this.showAlert = false;
  }
}
