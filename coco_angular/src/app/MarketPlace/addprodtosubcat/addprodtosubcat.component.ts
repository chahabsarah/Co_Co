import { Component } from '@angular/core';
import {ProductService} from "../MarketPlaceService/product.service";

@Component({
  selector: 'app-addprodtosubcat',
  templateUrl: './addprodtosubcat.component.html',
  styleUrls: ['./addprodtosubcat.component.scss']
})
export class AddprodtosubcatComponent {
    idProduct!: number;
    idSubCategory!: number;

  constructor(private productSubcategoryService: ProductService) { }

    onSubmit() {
        this.productSubcategoryService.assignProductToSubcategory(this.idProduct, this.idSubCategory)
            .subscribe(
                response => {
                    console.log(response); // Gérer la réponse
                    // Réinitialiser les valeurs des champs après soumission réussie si nécessaire
                    this.idProduct ;
                    this.idSubCategory ;
                },
                error => {
                    console.error(error); // Gérer les erreurs
                }
            );
    }

}
