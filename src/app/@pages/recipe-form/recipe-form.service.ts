import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RecipeCandidate} from "./recipe-form.component";

@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {

  constructor(private http: HttpClient) { }

  sendNewRecipe(recipe: RecipeCandidate): void {
    const recipesCreateURL = 'https://cookingrecipes-prod-cookingrecipes-wxg2ny.mo1.mogenius.io/recipe';
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: header
    };

    this.http.post<RecipeCandidate>(recipesCreateURL, recipe, httpOptions).subscribe();
  }
}
