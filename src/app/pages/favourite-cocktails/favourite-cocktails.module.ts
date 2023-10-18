import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteCocktailsRoutingModule } from './favourite-cocktails-routing.module';
import { FavouriteCocktailsComponent } from './favourite-cocktails.component';


@NgModule({
  declarations: [
    FavouriteCocktailsComponent
  ],
  imports: [
    CommonModule,
    FavouriteCocktailsRoutingModule
  ]
})
export class FavouriteCocktailsModule { }
