


export class Accomodation
{
   accommodationID!: number;;
   address!: string;
   rent_price!: number;;
   numberOfRoom!: number;;
   rules!: string;
   localisation!: string;
   accommodationName!: string;
   rooms!: Room[];
   categoryID!:number;
   categoryTitle!: string;
   imagePath!: string;
   imageName!: string
    }

export class Room
{
  roomID !: number;
  roomType !: Type
  rent !: number
  amenities!: string
  roomDetails!: string
  accommodationID!: number;
  imageNames !: string[];
  imagePaths !: string[];
  images: string[] = [];
  imagesBase64!: string[];
  imageUrls!: string[];
  accommodationName!: string;
  bookingPrice: number = 20;
  VisitDate!:Date;



}
export enum Type {
  Simple = 'Simple',
  Double = 'Double',
  Twin = 'Twin'
}
