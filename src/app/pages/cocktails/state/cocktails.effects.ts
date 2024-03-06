import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CocktailDbService } from "../../../shared/services/cocktail-db.service";
import * as CocktailsActions from "./cocktails.actions";
import { map, mergeMap, switchMap } from "rxjs";
import { Store } from "@ngrx/store";
import { getFirstLetter, State } from "./cocktails.reducer";

@Injectable()
export class CocktailsEffects {
    constructor(
        private actions$: Actions,
        private cocktailDB: CocktailDbService,
        private store: Store<State>
    ) {
    }

    LoadCocktailListByFirstLetter$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CocktailsActions.loadCocktailListByFirstLetter),
            switchMap(() =>
                this.store.select(getFirstLetter).pipe(
                    mergeMap(firstLetter => this.cocktailDB.getCocktailListByFirstLetter$(firstLetter)),
                    map(cocktailList => CocktailsActions.loadCocktailListByFirstLetterSuccess({ cocktailList }))
                )
            )
        );
    });

    LoadCocktailListByIngredient$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailListByIngredient),
                mergeMap(action => this.cocktailDB.getCocktailListByIngredient$(action.ingredientName)
                    .pipe(
                        map(cocktailList => CocktailsActions.loadCocktailListByIngredientSuccess({ cocktailList }))
                    )
                )
            );
    });

    loadCocktailDetails$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(CocktailsActions.loadCocktailDetails),
                mergeMap(action => this.cocktailDB.getCocktailDetails$(action.id)
                    .pipe(
                        map(cocktailDetails => CocktailsActions.loadCocktailDetailsSuccess({ cocktailDetails }))
                    )
                )
            );
    });

}
