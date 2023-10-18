import { createAction, props } from "@ngrx/store";
import { Ingredient } from "src/app/shared/services/ingredient-db.service";

export const loadIngredients = createAction(
    '[Ingredients] Load'
);

export const loadIngredientsSuccess = createAction(
    '[Ingredients] Load Success',
    props<{ ingredients: Ingredient[] }>()
);
