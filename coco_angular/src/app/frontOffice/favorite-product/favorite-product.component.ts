import {Component, OnInit} from '@angular/core';
import {Product} from "../../MarketPlace/product";
import {FavoriteproductService} from "../../MarketPlace/MarketPlaceService/favoriteproduct.service";

import {Router} from "@angular/router";
@Component({
  selector: 'app-favorite-product',
  templateUrl: './favoriteproduct.component.html',
  styleUrls: ['./favoriteproduct.component.scss']
})
export class FavoriteProductComponent implements OnInit{
  favoriteProducts: Product[] = [];

  constructor(private favoriteProductService: FavoriteproductService, private router:Router) { }

  ngOnInit(): void {
    const id= 1;
    this.loadFavoriteProducts(id);

  }

  loadFavoriteProducts(id:number) {
    // Appeler le service pour récupérer les produits favoris de l'utilisateur
    this.favoriteProductService.getUserFavorites(id).subscribe((response: Product[]) => {
      this.favoriteProducts = response;
    });
  }
  deleteProduct(idProduct: number) {
    // Afficher une alerte de confirmation
    const confirmation = confirm('Voulez-vous vraiment supprimer ce produit ?');

    // Vérifier si l'utilisateur a confirmé la suppression
    if (confirmation) {
      // Supprimer le produit des favoris
      this.favoriteProductService.removeFromFavorites(idProduct).subscribe(
          () => {
            // Recharger la liste de favoris après la suppression
            this.loadFavoriteProducts(1); // Ou utilisez l'ID de l'utilisateur approprié
            console.log('Produit supprimé des favoris avec succès.');
          },
          (error) => {
            console.error('Erreur lors de la suppression du produit des favoris :', error);
          }
      );
    }
  }


}
