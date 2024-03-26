import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CocktailApiService } from "../../../shared/services/cocktail-api.service";
import * as CocktailsActions from "./cocktails.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class CocktailsEffects {
    constructor(
        private actions$: Actions,
        private cocktailApiService: CocktailApiService
    ) {
    }

    LoadAllCocktailsList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CocktailsActions.loadAllCocktailsList),
            mergeMap(() => this.cocktailApiService.getAllCocktailsList$().pipe(
                    map(allCocktailsList => CocktailsActions.loadAllCocktailsListSuccess({ allCocktailsList }))
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
