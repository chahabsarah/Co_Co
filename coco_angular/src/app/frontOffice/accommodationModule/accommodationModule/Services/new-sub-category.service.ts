import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from '../../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class NewSubCategoryService {
  private baseUrl = 'http://localhost:8085/spring2024/api/subcategories';

  constructor(private http: HttpClient) { }

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${this.baseUrl}/getAllSubCategories`);
  }

  getSubCategoryById(id: number): Observable<SubCategory> {
    return this.http.get<SubCategory>(`${this.baseUrl}/getSubCategoryById/${id}`);
  }

  addSubCategory(subCategory: SubCategory): Observable<SubCategory> {
    return this.http.post<SubCategory>(`${this.baseUrl}/addSubCategory`, subCategory);
  }

  updateSubCategory(id: number, subCategory: SubCategory): Observable<SubCategory> {
    return this.http.put<SubCategory>(`${this.baseUrl}/updateSubCategory/${id}`, subCategory);
  }

  deleteSubCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteSubCategory/${id}`);
  }
}
