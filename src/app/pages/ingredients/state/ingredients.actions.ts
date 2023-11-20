import { createAction, props } from "@ngrx/store";
import { IngredientDetails, IngredientListItem } from "../../../shared/models/ingredient.model";

export const loadIngredientList = createAction(
    "[Ingredients] Load Ingredient List"
);

export const loadIngredientListSuccess = createAction(
    "[Ingredients] Load Ingredient List Success",
    props<{ ingredients: IngredientListItem[] }>()
);

export const loadIngredientDetails = createAction(
    "[Ingredients] Load Ingredient Details"
);

export const loadIngredientDetailsSuccess = createAction(
    "[Ingredients] Load Ingredient Details Success",
    props<{ ingredientDetails: IngredientDetails[] }>()
);
