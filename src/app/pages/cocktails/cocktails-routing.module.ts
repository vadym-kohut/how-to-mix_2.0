import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cocktail-list' },
  { path: 'cocktail-list', component: CocktailListComponent },
  { path: 'cocktail-details', component: CocktailDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailsRoutingModule { }
