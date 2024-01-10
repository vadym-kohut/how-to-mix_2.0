import { createAction, props } from "@ngrx/store";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";

export const loadCocktailListByFirstLetter = createAction(
    "[Cocktails] Load Cocktail List By First Letter",
    props<{ firstLetter: string }>()
);

export const loadCocktailListByFirstLetterSuccess = createAction(
    "[Cocktails] Load Cocktail List By First Letter Success",
    props<{ cocktailList: CocktailDetails[] }>()
);

export const loadCocktailListByIngredient = createAction(
    "[Cocktails] Load Cocktail List By Ingredient",
    props<{ ingredientName: string }>()
);

export const loadCocktailListByIngredientSuccess = createAction(
    "[Cocktails] Load Cocktail List By Ingredient Success",
    props<{ cocktailList: CocktailListItem[] }>()
);

export const loadCocktailDetails = createAction(
    "[Cocktails] Load Cocktail Details",
    props<{ id: string }>()
);

export const loadCocktailDetailsSuccess = createAction(
    "[Cocktails] Load Cocktail Details Success",
    props<{ cocktailDetails: CocktailDetails }>()
);
