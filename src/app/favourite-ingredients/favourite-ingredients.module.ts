import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteIngredientsRoutingModule } from './favourite-ingredients-routing.module';
import { FavouriteIngredientsComponent } from './favourite-ingredients.component';


@NgModule({
  declarations: [
    FavouriteIngredientsComponent
  ],
  imports: [
    CommonModule,
    FavouriteIngredientsRoutingModule
  ]
})
export class FavouriteIngredientsModule { }
