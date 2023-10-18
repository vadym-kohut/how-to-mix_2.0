import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { IngredientDBService } from "src/app/shared/services/ingredient-db.service";
import * as IngredientsActions from './ingredients.actions';

@Injectable()
export class IngredientsEffects {
    constructor(private actions$: Actions, private ingredientDB: IngredientDBService) { }

    LoadIngredients$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(IngredientsActions.loadIngredients),
                mergeMap(() => this.ingredientDB.getIngredientList$()
                    .pipe(
                        map(ingredients => IngredientsActions.loadIngredientsSuccess({ ingredients }))
                    )
                )
            )
    })
}
