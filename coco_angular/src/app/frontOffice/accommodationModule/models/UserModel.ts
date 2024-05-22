import { Role } from "src/app/backOffice/userManagement/model/Role";
import { FavoriteList } from "./favoriteListeModel";
import { Accomodation } from "./accomodationModel";
import { Sold } from "./Sold";

export class User {
  id!: number;
  email!: string;
  username!: string;
  password!: string;
  gender!: string;
  address!: string;
  dateOfBirth!: string;
  phoneNumber!: string;
  pictureUrl!: string;
  roles!: Role[];
  solds!:Sold['accountSold'];


  accommodations?: Accomodation[];

  favoriteList?: FavoriteList[];
  getFavoriteListId?(): number | null;
}
