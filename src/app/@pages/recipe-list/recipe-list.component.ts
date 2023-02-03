import { Component, OnInit } from '@angular/core';
import {RecipeListService} from "./recipe-list.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = new Array<Recipe>();
  ingredientsVisible: Array<boolean> = new Array<boolean>();
  ingredientsButtonStyle: Array<string> = new Array<string>();

  constructor(private recipeListService: RecipeListService) {
    this.updateRecipes();
  }

  ngOnInit(): void {
    this.updateRecipes();
  }

  private updateRecipes(): void {
    this.recipeListService.getRecipes().subscribe(
      (list: Array<Recipe>) => {
        this.recipes = list;
        this.ingredientsVisible = new Array<boolean>(this.recipes.length).fill(false)
        this.ingredientsButtonStyle = new Array<string>(this.recipes.length).fill("btn btn-outline-dark mt-auto")
        Observable.bind(this.recipes);
        Observable.bind(this.ingredientsVisible);
        Observable.bind(this.ingredientsButtonStyle);
      }
    )
  }

  toggleIngredients(index: number): void {
    this.ingredientsVisible[index] = !this.ingredientsVisible[index];
    this.ingredientsButtonStyle[index] = this.ingredientsVisible[index] ? "btn btn-dark mt-auto" : "btn btn-outline-dark mt-auto";
  }

}

interface Recipe{
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string[];
  description: string;
}
