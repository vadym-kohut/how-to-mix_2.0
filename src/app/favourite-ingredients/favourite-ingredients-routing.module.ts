import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteIngredientsComponent } from './favourite-ingredients.component';

const routes: Routes = [{ path: '', component: FavouriteIngredientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteIngredientsRoutingModule { }
