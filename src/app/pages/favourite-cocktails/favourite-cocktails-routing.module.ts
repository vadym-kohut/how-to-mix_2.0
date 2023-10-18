import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteCocktailsComponent } from './favourite-cocktails.component';

const routes: Routes = [{ path: '', component: FavouriteCocktailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteCocktailsRoutingModule { }
