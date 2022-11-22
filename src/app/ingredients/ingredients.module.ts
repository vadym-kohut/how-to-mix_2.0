import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';


@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientListComponent,
    IngredientDetailsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
