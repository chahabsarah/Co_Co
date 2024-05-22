import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../MarketPlace/MarketPlaceService/product.service';
import { Product } from '../../MarketPlace/product';
import {FavoriteproductService} from "../../MarketPlace/MarketPlaceService/favoriteproduct.service";
import {UserService} from "../../MarketPlace/MarketPlaceService/user.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";
import {Pictureproduct} from "../../MarketPlace/pictureproduct";
import {Observable} from "rxjs";

@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']

})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    image:Pictureproduct[] = [];
    searchText: string = '';
    minPrice: number | undefined;
    maxPrice: number | undefined;
    selectedType: string | undefined;
    idProduct!:number;
  isProductInFavorites: boolean = false;
  notificationMessage: string | null = null;
  p:number = 1;
  itemsPerPage:number=8;
  totalProduct:any;

    constructor(private productService: ProductService, private favoriteProductService: FavoriteproductService,private router:Router , private toast : NgToastService) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getAllProducts().subscribe((response: Product[]) => {
            this.products = response;
            this.applyFilters();
            this.totalProduct = response.length;
            this.checkIfProductIsInFavorites(this.idProduct);

        });
    }

    applyFilters() {
        this.filteredProducts = this.products.filter(product =>
            (this.selectedType ? product.typeProduct === this.selectedType : true) &&
            (this.searchText ? product.name.toLowerCase().includes(this.searchText.toLowerCase()) : true) &&
            (this.minPrice ? product.price >= this.minPrice : true) &&
            (this.maxPrice ? product.price <= this.maxPrice : true)
        );

    }
  getProductImageUrl(idProduct: number): Observable<string> {
    // Call your ProductService to get the image URL for the product
    // Assuming you have a method to get image URL in your ProductService
    return this.productService.getImageUrlForProduct(idProduct);
  }

    sortProductsByPriceAsc() {
        this.productService.getAllProductsSortedByPriceAsc().subscribe(
            (response: Product[]) => {
                this.products = response;
                this.applyFilters();
                console.log('Products sorted successfully.');
            },
            (error) => {
                console.error('Error sorting products:', error);
            }
        );
    }
    sortProductsByPriceDesc() {
        this.productService.getProductsSortedByPriceDesc().subscribe(
            (response: Product[]) => {
                this.products = response;
                this.applyFilters();
                console.log('Products sorted in descending order successfully.');
            },
            (error) => {
                console.error('Error sorting products in descending order:', error);
            }
        );
    }
    /*addToFavorites(idProduct: number) {
        this.favoriteProductService.getUserById(1).subscribe(
            (user) => {
                this.favoriteProductService.addToFavorites(idProduct).subscribe(
                    () => {
                        console.log('Product added to favorites successfully.');
                    },
                    (error: any) => {
                        console.error('Error adding product to favorites:', error);
                    }
                );
            },
            (error: any) => {
                console.error('Error getting user ID:', error);
            }
        );
    }*/
    addToFavorites(idProduct: number) {
        if (idProduct) {
            if (this.isProductInFavorites) {
                console.log('Product is already in favorites.');
                // Gérer le cas où le produit est déjà dans les favoris, comme afficher un message ou désactiver le bouton
                return;
            }

            console.log('Adding product to favorites:', idProduct);
            alert('Votre produit a été ajouté à votre liste de favoris.');
            this.toast.success({detail:"Success Message",summary:"Product is in your Favorite List",duration:50000})
            this.favoriteProductService.getUserById(1).subscribe(
                (user) => {
                    this.favoriteProductService.addToFavorites(idProduct).subscribe(
                        () => {
                            console.log('Product added to favorites successfully.');
                            alert('Votre produit a été ajouté à votre liste de favoris.');
                            // Rafraîchir la liste des produits ou mettre à jour isProductInFavorites ici si nécessaire
                        },
                        (error: any) => {
                            console.error('Error adding product to favorites:', error);
                        }
                    );
                },
                (error: any) => {
                    console.error('Error getting user ID:', error);
                }
            );
        } else {
            console.error('Invalid idProduct:', idProduct);
        }
    }



    removeFromFavorites(idProduct: number) {
        this.favoriteProductService.removeFromFavorites(idProduct).subscribe(
            () => {
                console.log('Product removed from favorites successfully.');
                // Optionnel : Mettre à jour la liste de produits favoris après la suppression
                this.loadProducts();
            },
            (error: any) => {
                console.error('Error removing product from favorites:', error);
            }
        );
    }
  checkIfProductIsInFavorites(idProduct: number) {
    this.favoriteProductService.isProductInFavorites(idProduct).subscribe(
      (result: boolean) => {
        this.isProductInFavorites = result;
      },
      (error) => {
        console.error('Error checking if product is in favorites:', error);
      }
    );
  }

}
