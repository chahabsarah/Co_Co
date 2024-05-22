import {Pictureproduct} from "../MarketPlace/pictureproduct";

enum TypeProduct {
  LENT = 'LENT',
  SELL = 'SELL'
}


export class Product {
  idProduct!:number
  name!:string
  description!:string
  quantity!:number
  weight!:string
  price!:number
  typeProduct!: TypeProduct
  pictureProduct: Pictureproduct = new Pictureproduct();

  getTypeAsString(): string {
    return TypeProduct[this.typeProduct];
  }

}
