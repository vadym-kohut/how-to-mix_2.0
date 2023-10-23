import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { IngredientCardComponent } from './ingredient-list/ingredient-card/ingredient-card.component';
import { StoreModule } from '@ngrx/store';
import { ingredientsReducer } from './state/ingredients.reducer';

@NgModule({
    declarations: [
        IngredientsComponent,
        IngredientListComponent,
        IngredientDetailsComponent,
        IngredientCardComponent,
    ],
    imports: [
        CommonModule,
        IngredientsRoutingModule,
        StoreModule.forFeature('ingredients', ingredientsReducer)
    ],
})
export class IngredientsModule { }
