import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { IngredientApiService } from "src/app/shared/services/ingredient-api.service";
import * as IngredientsActions from "./ingredients.actions";

@Injectable()
export class IngredientsEffects {
    constructor(
        private actions$: Actions,
        private ingredientApiService: IngredientApiService
    ) {
    }

    LoadIngredientList$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(IngredientsActions.loadIngredientList),
                mergeMap(() => this.ingredientApiService.getIngredientList$().pipe(
                        map(ingredientList => IngredientsActions.loadIngredientListSuccess({ ingredientList }))
                    )
                )
            );
    });

    LoadIngredientDetails$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(IngredientsActions.loadIngredientDetails),
                mergeMap(action => this.ingredientApiService.getIngredientDetails$(action.ingredientName).pipe(
                        map(ingredientDetails => IngredientsActions.loadIngredientDetailsSuccess({ ingredientDetails }))
                    )
                )
            );
    });
}
