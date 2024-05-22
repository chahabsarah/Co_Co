import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AddSubcategoryToCategoryService {

    constructor(private http: HttpClient) { }

    addSubcategoryToCategory(idCategory: number, idSubCategory: number): Observable<any> {
        const url = `http://localhost:8085/spring2024/addSubcategoryToCategory/${idCategory}/subcategories/${idSubCategory}`;
        return this.http.put(url, {}).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        // Your error handling logic here, you can log the error or show a user-friendly message
        console.error('An error occurred:', error);
        return throwError('Something went wrong, please try again later.');
    }
}
