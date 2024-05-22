import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/MarketPlace/MarketPlaceService/user.service';
import { CustomerDataService } from '../../accommodationModule/accommodationModule/Services/customer-data.service';
import { User } from '../../accommodationModule/models/UserModel';
import { Room } from '../../accommodationModule/models/roomModel';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  clientSecret: string | null = null;
  rent!: Room['rent'];
  customerData: User = new User();
    url = "http://localhost:8085/spring2024/stripe";

  constructor(private route: ActivatedRoute,private userService: UserService,private http: HttpClient) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.rent = params['rent'];
      console.log("room rent", this.rent);
    });

    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.customerData.username = user.username;
        this.customerData.email = user.email;
        console.log("userDate",this.customerData)
      },
      error => {
        console.error('Error fetching current user data:', error);
      }
    );

  }

  pay() {

    this.http.post<any>(`${this.url}/stripe/${this.rent}`, {}).subscribe(data => {
      this.clientSecret = data;
      alert("Paiement réussi !");
    }, error => {
      console.error('Une erreur est survenue lors de la requête:', error);
      alert("Une erreur est survenue lors du paiement. Veuillez réessayer plus tard.");
    });
  }
}
