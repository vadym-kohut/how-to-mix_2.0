import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CocktailApiService } from "../../../shared/services/cocktail-api.service";
import * as CocktailsActions from "./cocktails.actions";
import { map, mergeMap, switchMap } from "rxjs";
import { Store } from "@ngrx/store";
import { getFirstLetter, State } from "./cocktails.reducer";

@Injectable()
export class CocktailsEffects {
    constructor(
        private actions$: Actions,
        private cocktailApiService: CocktailApiService,
        private store: Store<State>
    ) {
    }

    LoadCocktailListByFirstLetter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CocktailsActions.loadCocktailListByFirstLetter),
            switchMap(() =>
                this.store.select(getFirstLetter).pipe(
                    mergeMap(firstLetter => this.cocktailApiService.getCocktailListByFirstLetter$(firstLetter)),
                    map(cocktailList => CocktailsActions.loadCocktailListByFirstLetterSuccess({ cocktailList }))
                )
            )
        );
    });

    LoadCocktailFilters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CocktailsActions.loadCocktailFilters),
            mergeMap(() => this.cocktailApiService.getCocktailFilters$().pipe(
                    map(cocktailFilters => CocktailsActions.loadCocktailFiltersSuccess({ cocktailFilters }))
                )
            )
        );
    });

    LoadCocktailListByIngredient$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailListByIngredient),
                mergeMap(action => this.cocktailApiService.getCocktailListByIngredient$(action.ingredientName).pipe(
                        map(cocktailList => CocktailsActions.loadCocktailListByIngredientSuccess({ cocktailList }))
                    )
                )
            );
    });

    loadCocktailDetails$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailDetails),
                mergeMap(action => this.cocktailApiService.getCocktailDetails$(action.id).pipe(
                        map(cocktailDetails => CocktailsActions.loadCocktailDetailsSuccess({ cocktailDetails }))
                    )
                )
            );
    });

}
