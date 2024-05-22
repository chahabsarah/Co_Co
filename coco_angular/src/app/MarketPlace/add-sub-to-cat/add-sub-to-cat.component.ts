import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AddSubcategoryToCategoryService } from "../MarketPlaceService/add-subcategory-to-category.service";
import {SubcategoryProductService} from "../MarketPlaceService/subcategory-product.service";

@Component({
    selector: 'app-add-sub-to-cat',
    templateUrl: './add-sub-to-cat.component.html',
    styleUrls: ['./add-sub-to-cat.component.scss']
})
export class AddSubToCatComponent /*implements OnInit */{
    idCategory!: number;
    idSubCategory!: number;

   // constructor(private route: ActivatedRoute, private addService: AddSubcategoryToCategoryService,private ) { }
    constructor(private subcategoryService: SubcategoryProductService) { }


    onSubmit() {
        this.subcategoryService.addSubcategoryToCategory(this.idCategory, this.idSubCategory)
            .subscribe(
                response => {
                    console.log(response); // Traitement de la réponse
                    // Réinitialiser les valeurs des champs après soumission réussie si nécessaire
                    this.idCategory ;
                    this.idSubCategory ;
                },
                error => {
                    console.error(error); // Gestion des erreurs
                }
            );
    }

    /*ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.idCategory = +params['idCategory'];
            this.idSubCategory = +params['idSubCategory'];
        });
    }

    affect(form: NgForm) {
        if (form.valid) {
            this.addService.addSubcategoryToCategory(this.idCategory, this.idSubCategory).subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.error(error);
                }
            );
        }
    }*/
}
