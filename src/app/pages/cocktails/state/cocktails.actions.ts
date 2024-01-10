import { createAction, props } from "@ngrx/store";
import { CocktailDetails } from "../../../shared/models/cocktail.model";

export const loadCocktailListByFirstLetter = createAction(
    '[Cocktails] Load Cocktail List By First Letter'
);

export const loadCocktailListByFirstLetterSuccess = createAction(
    '[Cocktails] Load Cocktail List By First Letter Success',
    props<{ cocktailListByFirstLetter: CocktailDetails[] }>
);

export const loadCocktailDetails = createAction(
    '[Cocktails] Load Cocktail Details'
);

export const loadCocktailDetailsSuccess = createAction(
    '[Cocktails] Load Cocktail Details Success',
    props<{ cocktailDetails: CocktailDetails }>
);
