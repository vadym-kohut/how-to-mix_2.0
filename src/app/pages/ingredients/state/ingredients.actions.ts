import { createAction, props } from "@ngrx/store";
import { Ingredient } from "../../../shared/interfaces/ingredient";

export const loadIngredients = createAction(
    '[Ingredients] Load'
);

export const loadIngredientsSuccess = createAction(
    '[Ingredients] Load Success',
    props<{ ingredients: Ingredient[] }>()
);
