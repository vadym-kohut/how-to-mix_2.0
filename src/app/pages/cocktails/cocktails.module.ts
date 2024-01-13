import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CocktailsRoutingModule } from "./cocktails-routing.module";
import { CocktailsComponent } from "./cocktails.component";
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";
import { CocktailDetailsComponent } from "./cocktail-details/cocktail-details.component";
import { CocktailsByIngredientComponent } from "./cocktails-by-ingredient/cocktails-by-ingredient.component";
import { StoreModule } from "@ngrx/store";
import { cocktailsReducer } from "./state/cocktails.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CocktailsEffects } from "./state/cocktails.effects";
import { CocktailCardComponent } from "../../shared/components/cocktail-card/cocktail-card.component";

@NgModule({
    declarations: [
        CocktailsComponent,
        CocktailListComponent,
        CocktailDetailsComponent,
        CocktailsByIngredientComponent
    ],
    imports: [
        CommonModule,
        CocktailsRoutingModule,
        CocktailCardComponent,
        StoreModule.forFeature("cocktails", cocktailsReducer),
        EffectsModule.forFeature([CocktailsEffects])
    ]
})
export class CocktailsModule {
}
