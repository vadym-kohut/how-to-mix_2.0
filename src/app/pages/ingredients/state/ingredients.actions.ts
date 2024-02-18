import { createAction, props } from "@ngrx/store";
import { IngredientDetails, IngredientListItem } from "../../../shared/models/ingredient.model";

export const loadIngredientList = createAction(
    "[Ingredients] Load Ingredient List"
);

export const loadIngredientListSuccess = createAction(
    "[Ingredients] Load Ingredient List Success",
    props<{ ingredientList: IngredientListItem[] }>()
);

export const addToChosenIngredientList = createAction(
    "[Ingredients] Add To Chosen Ingredient List",
    props<{ ingredientName: IngredientListItem["strIngredient1"] }>()
);

export const removeFromChosenIngredientList = createAction(
    "[Ingredients] Remove From Chosen Ingredient List",
    props<{ ingredientToRemoveName: IngredientListItem["strIngredient1"] }>()
);

export const clearChosenIngredientList = createAction(
    "[Ingredients] Clear Chosen Ingredient List"
);

export const loadIngredientDetails = createAction(
    "[Ingredients] Load Ingredient Details",
    props<{ ingredientName: string }>()
);

export const loadIngredientDetailsSuccess = createAction(
    "[Ingredients] Load Ingredient Details Success",
    props<{ ingredientDetails: IngredientDetails }>()
);
