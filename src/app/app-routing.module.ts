import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './pages/cocktails/cocktail-list/cocktail-list.component';
import { IngredientListComponent } from './pages/ingredients/ingredient-list/ingredient-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RandomCocktailListComponent } from './random-cocktail-list/random-cocktail-list.component';

const routes: Routes = [
    {
        path: 'cart',
        loadChildren: () =>
            import('./pages/cart/cart.module').then((m) => m.CartModule),
    },
    {
        path: 'cocktails',
        loadChildren: () =>
            import('./pages/cocktails/cocktails.module').then(
                (m) => m.CocktailsModule
            ),
    },
    {
        path: 'favourite-cocktails',
        loadChildren: () =>
            import('./pages/favourite-cocktails/favourite-cocktails.module').then(
                (m) => m.FavouriteCocktailsModule
            ),
    },
    {
        path: 'favourite-ingredients',
        loadChildren: () =>
            import('./pages/favourite-ingredients/favourite-ingredients.module').then(
                (m) => m.FavouriteIngredientsModule
            ),
    },
    {
        path: 'ingredients',
        loadChildren: () =>
            import('./pages/ingredients/ingredients.module').then(
                (m) => m.IngredientsModule
            ),
    },
    {
        path: 'log-in',
        loadChildren: () =>
            import('./pages/log-in/log-in.module').then((m) => m.LogInModule),
    },
    {
        path: 'stop-list',
        loadChildren: () =>
            import('./pages/stop-list/stop-list.module').then(
                (m) => m.StopListModule
            ),
    },
    { path: 'random-cocktail-list', component: RandomCocktailListComponent },
    { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
