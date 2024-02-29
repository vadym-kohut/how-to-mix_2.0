import { createAction, props } from "@ngrx/store";
import { IngredientDetails, IngredientListItem } from "../../../shared/models/ingredient.model";

export const loadIngredientList = createAction(
    "[Ingredients] Load Ingredient List"
);

export const loadIngredientListSuccess = createAction(
    "[Ingredients] Load Ingredient List Success",
    props<{ ingredientList: IngredientListItem[] }>()
);

export const loadIngredientDetails = createAction(
    "[Ingredients] Load Ingredient Details",
    props<{ ingredientName: string }>()
);

export const loadIngredientDetailsSuccess = createAction(
    "[Ingredients] Load Ingredient Details Success",
    props<{ ingredientDetails: IngredientDetails }>()
);

export const addToChosenIngredientList = createAction(
    "[Ingredients] Add To Chosen Ingredient List",
    props<{ ingredientName: string }>()
);

export const removeFromChosenIngredientList = createAction(
    "[Ingredients] Remove From Chosen Ingredient List",
    props<{ ingredientToRemoveName: string }>()
);

export const clearChosenIngredientList = createAction(
    "[Ingredients] Clear Chosen Ingredient List"
);

export const addToFavouriteIngredientList = createAction(
    "[Ingredients] Add To Favourite Ingredient List",
    props<{ ingredientName: string }>()
);

export const removeFromFavouriteIngredientList = createAction(
    "[Ingredients] Remove From Favourite Ingredient List",
    props<{ ingredientToRemoveName: string }>()
);

export const clearFavouriteIngredientList = createAction(
    "[Ingredients] Clear Favourite Ingredient List"
);

export const addToStopList = createAction(
    "[Ingredients] Add To Stop List",
    props<{ ingredientName: string }>()
);

export const removeFromStopList = createAction(
    "[Ingredients] Remove From Stop List",
    props<{ ingredientToRemoveName: string }>()
);

export const clearStopList = createAction(
    "[Ingredients] Clear Stop List"
);
