import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientsComponent } from './ingredients.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ingredient-list' },
  { path: 'ingredient-list', component: IngredientListComponent },
  { path: 'ingredient-details', component: IngredientDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
