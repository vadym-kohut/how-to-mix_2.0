import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './cocktails/cocktail-list/cocktail-list.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RandomCocktailListComponent } from './random-cocktail-list/random-cocktail-list.component';

const routes: Routes = [
    { path: '', component: IngredientListComponent },
    {
        path: 'cart',
        loadChildren: () =>
            import('./cart/cart.module').then((m) => m.CartModule),
    },
    {
        path: 'cocktails',
        loadChildren: () =>
            import('./cocktails/cocktails.module').then(
                (m) => m.CocktailsModule
            ),
    },
    {
        path: 'favourite-cocktails',
        loadChildren: () =>
            import('./favourite-cocktails/favourite-cocktails.module').then(
                (m) => m.FavouriteCocktailsModule
            ),
    },
    {
        path: 'favourite-ingredients',
        loadChildren: () =>
            import('./favourite-ingredients/favourite-ingredients.module').then(
                (m) => m.FavouriteIngredientsModule
            ),
    },
    {
        path: 'ingredients',
        loadChildren: () =>
            import('./ingredients/ingredients.module').then(
                (m) => m.IngredientsModule
            ),
    },
    {
        path: 'log-in',
        loadChildren: () =>
            import('./log-in/log-in.module').then((m) => m.LogInModule),
    },
    {
        path: 'stop-list',
        loadChildren: () =>
            import('./stop-list/stop-list.module').then(
                (m) => m.StopListModule
            ),
    },
    { path: 'random-cocktail-list', component: RandomCocktailListComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
