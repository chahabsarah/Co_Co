import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProduct } from '../category-product';
import { CategoryProductService } from '../MarketPlaceService/category-product.service';

@Component({
    selector: 'app-edit-category',
    templateUrl: './edit-category.component.html',
    styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
    categoryId!: number;
    category!: CategoryProduct;
    editedCategoryName: string = '';
    showAlert = false;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private categoryService: CategoryProductService
    ) {}

    ngOnInit() {
        // Retrieve category ID from route parameters
        this.route.params.subscribe(params => {
            this.categoryId = +params['idCategory'];
            // Fetch category details based on the ID
            this.categoryService.getCategoryProductById(this.categoryId).subscribe(category => {
                this.category = category;
                this.editedCategoryName = category.categoryName; // Initialize the editedCategoryName with the current value
            });
        });
    }

    saveEditedCategory() {
        // Update the category name
        this.category.categoryName = this.editedCategoryName;
        this.showAlert=true;


        // Call your updateCategoryProduct method from the service
        this.categoryService.updateCategoryProduct(this.category, this.category.idCategory).subscribe(
            updatedCategory => {
                console.log('Category updated successfully:', updatedCategory);
                // Redirect to the category list or any other page after update
                this.router.navigate(['/category-list']);
            },
            error => {
                console.error('Error updating category:', error);
            }
        );
    }
    closeAlert(){
        this.showAlert = false ;
    }
}
