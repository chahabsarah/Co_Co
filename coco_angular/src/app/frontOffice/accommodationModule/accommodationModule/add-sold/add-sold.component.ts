// add-sold.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import { Sold } from '../../models/Sold';
import { User } from '../../models/UserModel';


@Component({
  selector: 'app-add-sold',
  templateUrl: './add-sold.component.html',
  styleUrls: ['./add-sold.component.scss']
})
export class AddSoldComponent implements OnInit {
  currentUser: User | undefined;
  currentSold: Sold | undefined;
  newSoldValue: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.currentUser = user;
        this.loadCurrentUserSold();
      },
      error => {
        console.error('Error fetching current user:', error);
      }
    );
  }

  loadCurrentUserSold() {
    if (this.currentUser) {
      this.userService.findCurrentUserSoldByIdUser(this.currentUser.id).subscribe(
        (sold: Sold) => {
          this.currentSold = sold;
        },
        error => {
          console.error('Error fetching current user sold:', error);
        }
      );
    }
  }

  addSold() {
    if (this.currentUser && this.newSoldValue > 0) {
      if (this.currentSold && this.currentSold.accountSold > 0) {
        const newTotalSold = this.currentSold.accountSold + this.newSoldValue;
        this.userService.updateSoldForUser(this.currentUser.id, newTotalSold).subscribe(
          (sold: Sold) => {
            console.log('Solde mis à jour avec succès:', sold);
            this.loadCurrentUserSold();
            this.newSoldValue = 0;
          },
          error => {
            console.error('Erreur lors de la mise à jour du solde:', error);
          }
        );
      } else {
        this.userService.createSoldForUser(this.currentUser.id, this.newSoldValue).subscribe(
          (sold: Sold) => {
            console.log('Solde ajouté avec succès:', sold);
            this.loadCurrentUserSold();
            this.newSoldValue = 0;
          },
          error => {
            console.error('Erreur lors de l\'ajout du solde:', error);
          }
        );
      }
    } else {
      console.error('Le montant à ajouter doit être supérieur à zéro et l\'utilisateur doit être défini.');
    }
  }

}
