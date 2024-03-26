import { createAction, props } from "@ngrx/store";
import { CocktailDetails, CocktailFilters, CocktailListItem } from "../../../shared/models/cocktail.model";

// FIRST LETTER
export const choseFirstLetter = createAction(
    "[Cocktails] Chose First Letter",
    props<{ firstLetter: string }>()
);

// LOAD ALL COCKTAILS LIST
export const loadAllCocktailsList = createAction(
    "[Cocktails] Load All Cocktails List"
);

export const loadAllCocktailsListSuccess = createAction(
    "[Cocktails] Load All Cocktails List Success",
    props<{ allCocktailsList: CocktailDetails[] }>()
);

// LOAD COCKTAIL FILTERS
export const loadCocktailFilters = createAction(
    "[Cocktails] Load Cocktail Filters"
);

export const loadCocktailFiltersSuccess = createAction(
    "[Cocktails] Load Cocktail Filters Success",
    props<{ cocktailFilters: CocktailFilters }>()
);

// FILTERED COCKTAIL LIST
export const cocktailFiltersChanged = createAction(
    "[Cocktails] Cocktail Filters Changed",
    props<{ cocktailFilters: CocktailFilters }>()
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
    props<{ newCocktail: CocktailListItem }>()
);

export const removeFromFavouriteCocktailList = createAction(
    "[Cocktails] Remove From Favourite Ingredient List",
    props<{ cocktailToRemove: CocktailListItem }>()
);

export const clearFavouriteCocktailList = createAction(
    "[Cocktails] Clear Favourite Ingredient List"
);
