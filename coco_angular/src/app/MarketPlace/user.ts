import { Sold } from "../frontOffice/accommodationModule/models/Sold";

export class User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  address: string;
  dateOfBirth: string; // Assurez-vous de gérer le format de la date correctement
  pictureUrl: string;
sold!:Sold['accountSold'];
FavoriteList!:[];

  constructor(
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    gender: string,
    address: string,
    dateOfBirth: string,
    pictureUrl: string
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.gender = gender;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.pictureUrl = pictureUrl;
    // Initialisez d'autres propriétés si nécessaire
  }
}
