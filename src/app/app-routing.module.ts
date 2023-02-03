import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipeListComponent} from "./@pages/recipe-list/recipe-list.component";
import {RecipeFormComponent} from "./@pages/recipe-form/recipe-form.component";

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'create', component: RecipeFormComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
