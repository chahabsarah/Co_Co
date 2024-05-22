import { User } from "./UserModel";

export class CustomerData {
    customerId!:String;
    name!: User['username'];
    email!: User['email'];
    paymentMethodId!: String;
    cardNumber!: String;
    CVC2 !:String;
 }
