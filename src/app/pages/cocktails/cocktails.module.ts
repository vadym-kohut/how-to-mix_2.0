import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CocktailsRoutingModule } from "./cocktails-routing.module";
import { CocktailsComponent } from "./cocktails.component";
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-details/cocktail-details.component";
import { CocktailCardComponent } from "./cocktail-list/cocktail-card/cocktail-card.component";
import { CocktailsByIngredientComponent } from "./cocktails-by-ingredient/cocktails-by-ingredient.component";
import { StoreModule } from "@ngrx/store";
import { cocktailsReducer } from "./state/cocktails.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CocktailsEffects } from "./state/cocktails.effects";

@NgModule({
    declarations: [
        CocktailsComponent,
        CocktailListComponent,
        CocktailDetailsComponent,
        CocktailCardComponent,
        CocktailsByIngredientComponent
    ],
    imports: [
        CommonModule,
        CocktailsRoutingModule,
        StoreModule.forFeature("cocktails", cocktailsReducer),
        EffectsModule.forFeature([CocktailsEffects])
    ]
})
export class CocktailsModule {
}
