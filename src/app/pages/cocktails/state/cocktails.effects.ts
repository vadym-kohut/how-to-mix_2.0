import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CocktailDbService } from "../../../shared/services/cocktail-db.service";
import * as CocktailsActions from "./cocktails.actions";
import { map, mergeMap } from "rxjs";

@Injectable()
export class CocktailsEffects {
    constructor(
        private actions$: Actions,
        private cocktailDB: CocktailDbService
    ) {
    }

    LoadCocktailListByFirstLetter$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailListByFirstLetter),
                mergeMap(action => this.cocktailDB.getCocktailListByFirstLetter$(action.firstLetter)
                    .pipe(
                        map(cocktailList => CocktailsActions.loadCocktailListByFirstLetterSuccess({ cocktailList }))
                    ))
            );
    });

    LoadCocktailListByIngredient$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailListByIngredient),
                mergeMap(action => this.cocktailDB.getCocktailListByIngredient$(action.ingredientName)
                    .pipe(
                        map(cocktailList => CocktailsActions.loadCocktailListByIngredientSuccess({ cocktailList }))
                    ))
            );
    });

}
