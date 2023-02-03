import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any>{
    const recipesListURL = 'https://cookingrecipes-prod-cookingrecipes-wxg2ny.mo1.mogenius.io/recipe';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: header
    };

    return this.http.get(recipesListURL, httpOptions);
  }
}
