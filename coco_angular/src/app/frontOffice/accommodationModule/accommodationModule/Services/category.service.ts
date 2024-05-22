import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  map(arg0: (room: any) => any): CategoryService {
    throw new Error('Method not implemented.');
  }
  api="http://localhost:8085/spring2024/api";
 

  constructor(private http:HttpClient) { }

//   /******************** Category  ****************************/
//   getAllCategories(){
//     return this.http.get(this.api+"/allCategories");
//   }
//   //path ghaltaa collocation ray zeyda msh mwjouda
//   AddCategory(data:any){
//     return this.http.post(this.api+"/addCategory",data);
//     //return this.http.post( 'http://localhost:8085/spring2024/api/categories/addCategory' ,data);
//     //ekhdm bl methode hedhi o badl ts kifnaa 
//   }
//   deleteCategory(id:any){
//     return this.http.delete(this.api+"/deleteCategory/"+id);
//   }
//   updateCategory(id:any,data:any){
//     return this.http.put(this.api+"/updateCategory/"+id,data);
//   }
//   getCategory(id:any){
//     return this.http.get(this.api+"/getCategory/"+id);
//   }


//     /******************** SubCategory  ****************************/
//   getAllSubCategories(){
//     return this.http.get(this.api+"/allSubCategories");
//   }
//   addSubCategory(data:any){
//     return this.http.post(this.api+"/addSubCategory",data);
//   }
//   deleteSubCategory(id:any){
//     return this.http.delete(this.api+"/deleteSubCategory/"+id);
//   }
//   updateSubCategory(id:any,data:any){
//     return this.http.put(this.api+"/updateSubCategory/"+id,data);
//   }
//   getSubCategory(id:any){
//     return this.http.get(this.api+"/getSubCategory/"+id);
//   }


//     /******************** Accommodation  ****************************/
//   getAllAccommodations(){
//     return this.http.get(this.api+"/allAccommodations");
//   }

//   getAccommodation(id:any){
//     return this.http.get(this.api+"/getAccommodation/"+id);
//   }

//   getPhotoAccommodation(id:any){
//     return this.http.get(this.api+"/getPhotoAccommodation/"+id);
//   }

//   AddAccommodation(address:any,localisation:any,rules:any,rent_price:any,numberOfRoom:any,file:any){
//     const formData = new FormData();
//     formData.append('a', address);
//     formData.append('l', localisation);
//     formData.append('re', rules);
//     formData.append('r', rent_price);
//     formData.append('n', numberOfRoom);
//     formData.append('f', file);
//     return this.http.post(this.api+"/addAccommodation",formData);
//   }

//   deleteAccommodation(id:any){
//     return this.http.delete(this.api+"/deleteAccommodation/"+id)
//   }

//   updateAccommodation(id: any, address: string, localisation: string, rules: string, rent_price: number, numberOfRoom: number, file: File | null = null) {
//     const formData = new FormData();
//     formData.append('adres', address);
//     formData.append('local', localisation);
//     formData.append('rules', rules);
//     formData.append('rente', rent_price.toString());
//     formData.append('nbrrooom', numberOfRoom.toString());
//     if (file) {
//       formData.append('multipartFile', file, file.name);
//     }

//     return this.http.post(`${this.api}/updateAccommodation/${id}`, formData);
//   }



//     /******************** Room  ****************************/
//   AddRoom(roomType:any,rent:any,amenities:any,roomDetails:any,accommodation:any,file:any){
//     const formData=new FormData();
//     formData.append("rt",roomType)
//     formData.append("r",rent)
//     formData.append("a",amenities)
//     formData.append("rd",roomDetails)
//     formData.append("id",accommodation)
//     formData.append("file",file)
//     return this.http.post(this.api+"/addRoom",formData)

//   }
//   getPhotoRoom(id:any){
//     return this.http.get(this.api+"/getPhotoRoom/"+id)
//   }

//   deleteRoom(id:any){
//     return this.http.delete(this.api+"/deleteRoom/"+id)
//   }

//   getAllRooms(){
//   return this.http.get(this.api+"/allRooms")
//   }

// updateRoom(id:any,data:any){
//   return this.http.put(this.api+"/updateRoom/"+id,data);
// }

// getRoom(id:any){
//   return this.http.get(this.api+"/getRoom/"+id);
// }

// }
}