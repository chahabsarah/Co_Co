import {Time} from "@angular/common";

export class Ride {
  /*rideID!:number;
  startLocation!: string;
  arrivalAddress!: string;
  departureDate!: Date | null;
  time!: Time | null;
  price!: number;
  placeDisponible!: number;
  smoking_Vehicle!: boolean;
  preference!: string;
  avoidTolls!: boolean;*/

  rideID!: number;
  startLocation!: string;
  arrivalAddress!: string;
  departureDate!: string ;
  time!: string ;
  price!: number;
  placeDisponible!: number;
  smoking_Vehicle: boolean = false;
  preference!: string;
  avoidTolls: boolean = false;


}
