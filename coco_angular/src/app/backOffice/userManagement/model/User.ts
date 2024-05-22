import { Role } from './Role';
export class User {
    id!: number;
    email!: string;
    password!: string;
    username!: string;
    gender!: string;
    address!: string;
    dateOfBirth!: Date; 
    pictureUrl!: string;
    phoneNumber!: string;
    role!: Role[];  
}