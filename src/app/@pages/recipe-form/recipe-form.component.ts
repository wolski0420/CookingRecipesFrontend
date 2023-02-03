import { Component, OnInit } from '@angular/core';
import {RecipeFormService} from "./recipe-form.service";
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RecipeListComponent} from "../recipe-list/recipe-list.component";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  imageSrcHtmlDefault: string = 'http://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg'
  imageSrcHtml: string = this.imageSrcHtmlDefault

  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    ingredients: new FormArray([], Validators.required),
    description: new FormControl('', Validators.required),
  })

  constructor(private recipeFormService: RecipeFormService, private router: Router) {}

  ngOnInit(): void {
    this.imageUrl.valueChanges.forEach(
      (value: string) => this.imageSrcHtml = value
    );
  }

  onImageSrcHtmlError() {
    this.imageSrcHtml = this.imageSrcHtmlDefault
  }

  get imageUrl() {
    return this.recipeForm.get('imageUrl') as FormControl
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray
  }

  addIngredient() {
    this.ingredients.push(new FormControl('', Validators.required))
  }

  deleteIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  onSubmit() {
    this.recipeFormService.sendNewRecipe(this.recipeForm.value as RecipeCandidate)
    this.router.navigateByUrl('')
  }
}

export interface RecipeCandidate{
  name?: string;
  imageUrl?: string;
  ingredients?: string[];
  description?: string;
}
