import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { SubCategory } from '../../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class NewCategoryService {
  private baseUrl = 'http://localhost:8085/spring2024/api/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/getAllCategories`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/getCategoryById/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/addCategory`, category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/updateCategory/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteCategory/${id}`);
  }

  getAllSubCategoriesByCategory(categoryId: number): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(`${this.baseUrl}/${categoryId}/subcategories`);
  }
}
