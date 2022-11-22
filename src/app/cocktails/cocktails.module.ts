import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailsRoutingModule } from './cocktails-routing.module';
import { CocktailsComponent } from './cocktails.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';


@NgModule({
  declarations: [
    CocktailsComponent,
    CocktailListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    CommonModule,
    CocktailsRoutingModule
  ]
})
export class CocktailsModule { }
