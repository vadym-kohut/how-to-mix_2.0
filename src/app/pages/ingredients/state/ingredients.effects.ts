import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { IngredientDBService } from "src/app/shared/services/ingredient-db.service";
import * as IngredientsActions from "./ingredients.actions";

@Injectable()
export class IngredientsEffects {
    constructor(
        private actions$: Actions,
        private ingredientDB: IngredientDBService
    ) {
    }

    LoadIngredientList$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(IngredientsActions.loadIngredientList),
                mergeMap(() => this.ingredientDB.getIngredientList$()
                    .pipe(
                        map(ingredientList => IngredientsActions.loadIngredientListSuccess({ ingredientList: ingredientList }))
                    )
                )
            );
    });

    LoadIngredientDetails$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(IngredientsActions.loadIngredientDetails),
                mergeMap(action => this.ingredientDB.getIngredientDetails$(action.ingredientName)
                    .pipe(
                        map(ingredientDetails => IngredientsActions.loadIngredientDetailsSuccess({ ingredientDetails: ingredientDetails }))
                    )
                )
            );
    });
}
