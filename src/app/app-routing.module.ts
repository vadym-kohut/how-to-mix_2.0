import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'cocktails', loadChildren: () => import('./cocktails/cocktails.module').then(m => m.CocktailsModule) },
  { path: 'favourite-cocktails', loadChildren: () => import('./favourite-cocktails/favourite-cocktails.module').then(m => m.FavouriteCocktailsModule) },
  { path: 'favourite-ingredients', loadChildren: () => import('./favourite-ingredients/favourite-ingredients.module').then(m => m.FavouriteIngredientsModule) },
  { path: 'ingredients', loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule) },
  { path: 'log-in', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule) },
  { path: 'stop-list', loadChildren: () => import('./stop-list/stop-list.module').then(m => m.StopListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
