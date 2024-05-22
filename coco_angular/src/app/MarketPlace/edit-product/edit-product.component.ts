import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../MarketPlaceService/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Product} from "../product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  idProduct!: number;
  product!: Product;
  editedproduct: string = '';
  showAlert = false;
  registerForm: FormGroup = new FormGroup({
    idProduct: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    typeProduct: new FormControl([]), // Initially empty array for multiple checkboxes
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0)])
  });

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idProduct = +params['idProduct'];
      this.productService.getProductById(this.idProduct).subscribe(product => {
        this.product = product;
        this.registerForm.patchValue(this.product as any);
      });
    });
  }

  saveEditedCategory() {
    this.showAlert = true;
    this.productService.updateProduct(this.registerForm.value, this.product.idProduct).subscribe(
        updatedCategory => {
          console.log('Product updated successfully:', updatedCategory);
          this.router.navigate(['/product-list']);
        },
        error => {
          console.error('Error updating product:', error);
        }
    );
  }

  closeAlert() {
    this.showAlert = false;
  }

  updateType(type: string) {
    const typeControl = this.registerForm.get('typeProduct') as FormControl;
    const types = typeControl.value as string[];
    if (types.includes(type)) {
      typeControl.setValue(types.filter(t => t !== type));
    } else {
      typeControl.setValue([...types, type]);
    }
  }

  isTypeChecked(type: string): boolean {
    const types = this.registerForm.get('typeProduct')?.value as string[];
    return types.includes(type);
  }
}
