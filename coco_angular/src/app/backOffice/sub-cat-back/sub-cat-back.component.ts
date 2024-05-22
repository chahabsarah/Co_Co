import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import * as QRCode from 'qrcode';
import { NewSubCategoryService } from 'src/app/frontOffice/accommodationModule/accommodationModule/Services/new-sub-category.service';
import { SubCategory } from 'src/app/frontOffice/accommodationModule/models/subCategory';

@Component({
  selector: 'app-sub-cat-back',
  templateUrl: './sub-cat-back.component.html',
  styleUrls: ['./sub-cat-back.component.scss']
})
export class SubCatBackComponent  implements OnInit{
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
    this.router.navigate(['/updateSubCat', SubCategoryID]);
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
