import { createAction, props } from "@ngrx/store";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";

// LOAD COCKTAIL LIST
export const loadCocktailListByFirstLetter = createAction(
    "[Cocktails] Load Cocktail List By First Letter",
    props<{ firstLetter: string }>()
);

export const loadCocktailListByFirstLetterSuccess = createAction(
    "[Cocktails] Load Cocktail List By First Letter Success",
    props<{ cocktailList: CocktailDetails[] }>()
);

// LOAD COCKTAIL LIST BY INGREDIENT
export const loadCocktailListByIngredient = createAction(
    "[Cocktails] Load Cocktail List By Ingredient",
    props<{ ingredientName: string }>()
);

export const loadCocktailListByIngredientSuccess = createAction(
    "[Cocktails] Load Cocktail List By Ingredient Success",
    props<{ cocktailList: CocktailListItem[] }>()
);

// LOAD COCKTAIL DETAILS
export const loadCocktailDetails = createAction(
    "[Cocktails] Load Cocktail Details",
    props<{ id: string }>()
);

export const loadCocktailDetailsSuccess = createAction(
    "[Cocktails] Load Cocktail Details Success",
    props<{ cocktailDetails: CocktailDetails }>()
);

// FAVOURITE COCKTAIL LIST
export const addToFavouriteCocktailList = createAction(
    "[Cocktails] Add To Favourite Ingredient List",
    props<{ cocktailName: string }>()
);

export const removeFromFavouriteCocktailList = createAction(
    "[Cocktails] Remove From Favourite Ingredient List",
    props<{ cocktailToRemoveName: string }>()
);

export const clearFavouriteCocktailList = createAction(
    "[Cocktails] Clear Favourite Ingredient List"
);
