import { createAction, props } from "@ngrx/store";
import { IngredientListItem } from "../../../shared/interfaces/ingredientDetails";

export const loadIngredients = createAction(
    '[Ingredients] Load'
);

export const loadIngredientsSuccess = createAction(
    '[Ingredients] Load Success',
    props<{ ingredients: IngredientListItem[] }>()
);
