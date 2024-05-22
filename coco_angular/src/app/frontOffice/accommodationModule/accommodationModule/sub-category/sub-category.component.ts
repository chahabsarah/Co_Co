import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NewSubCategoryService } from '../Services/new-sub-category.service';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';


interface SubCategory {
  subCategoryID: number;
  subCategoryTitle: string;
  subCategoryDescription: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit{
  subCat:any[]=[]
  idcat:any;
  @ViewChild('myForm3') myForm: any;
  @ViewChild('myForm2') updateForm: any;
  ngOnInit(): void {
    this.getAllSubCategory();

  }
  constructor(private catsservice:NewSubCategoryService,private modelServie:BsModalService, private router: Router) { }

  getAllSubCategory(){
    this.catsservice.getAllSubCategories().subscribe((data:any)=>{
      console.log(data);
      this.subCat=data;
    }
    )
  }

  update(a:any){
    console.log(a);
    this.subCat=this.subCat.map((cat:any)=>{
      if(cat.subCategoryID==a.subCategoryID){
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
    this.subCat.push(a);
    this.onhide();
  }



  deleteSubCategory(id:any){
    this.catsservice.deleteSubCategory(id).subscribe((data:any)=>{
      console.log(data);
      this.subCat=this.subCat.filter((cat:any)=>cat.subCategoryID!==id);
    }
    )
  }
  navigateToUpdateSubCat(SubCategoryID: number): void {
    this.router.navigate(['/update-subcategory', SubCategoryID]);
  }
  onhide(){
    this.modelServie.hide(1);
  }



  generateQRCode(subCat: SubCategory): string {
    const qrOptions = {
      color: {
        dark: '#000000',   // Couleur des modules sombres (par défaut)
      light: '#FFC0CB'   // Couleur des modules clairs
      }
    };

    const qrContent = `${subCat.subCategoryTitle}\n${subCat.subCategoryDescription}`;
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
