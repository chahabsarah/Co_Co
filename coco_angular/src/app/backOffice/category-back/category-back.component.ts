import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NewCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-category.service';
import { Category } from 'src/app/frontOffice/accommodationModule/models/category';
import * as QRCode from 'qrcode';
@Component({
  selector: 'app-category-back',
  templateUrl: './category-back.component.html',
  styleUrls: ['./category-back.component.scss']
})
export class CategoryBackComponent implements OnInit{

  cats:any[]=[]
  idcat:any;
  @ViewChild('myForm') myForm: any;
  @ViewChild('myForm2') updateForm: any;
  ngOnInit(): void {
    this.getAllCategories();

  }
  constructor(private catsservice:NewCategoryService,private modelServie:BsModalService, private router: Router) { }

  getAllCategories(){
    this.catsservice.getAllCategories().subscribe((data:any)=>{
      console.log(data);
      this.cats=data;
    }
    )
  }
  deleteCategory(id: number): void {
    this.catsservice.deleteCategory(id).subscribe(
      () => {
        console.log('Category deleted successfully.');
        // Refresh the list of categories after deletion
        this.getAllCategories();
      },
      error => {
        console.error('Error deleting category:', error);
      }
    );
  }
  update(a:any){
    console.log(a);
    this.cats=this.cats.map((cat:any)=>{
      if(cat.categoryID==a.categoryID){
        this.onhide();
        return a;

      }
      this.onhide();
      return cat;
    }

    )

  }
  add(a:any){
    console.log(a);
    this.cats.push(a);
    this.onhide();
  }
  navigateToUpdateCategory(categoryID: number): void {
    this.router.navigate(['/updateCat', categoryID]);
  }
  onhide(){
    this.modelServie.hide(1);
  }
    generateQRCode(cats: Category): string {
      const qrOptions = {
        color: {
        dark: '#000000',
        light: '#FFC0CB'
        }
      };

      const qrContent = `${cats.categoryTitle}\n${cats.categoryDescription}`;
      let qrCodeUrl: string = '';
      QRCode.toDataURL(qrContent, { errorCorrectionLevel: 'H', ...qrOptions }, (err: any, url: string) => {
        if (err) {
          console.error(err);
        } else {
          qrCodeUrl = url;
        }
      });
      return qrCodeUrl;
    }

}

