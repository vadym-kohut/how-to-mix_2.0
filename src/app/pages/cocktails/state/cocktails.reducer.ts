import * as CocktailActions from "./cocktails.actions";
import * as AppState from "../../../state/app.state";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface State extends AppState.State {
    cocktailState: CocktailState;
}

export interface CocktailState {
    cocktailListByFirstLetter: CocktailDetails[];
    cocktailListByIngredient: CocktailListItem[];
    cocktailDetails: CocktailDetails | null;
}

const initialState: CocktailState = {
    cocktailListByFirstLetter: [],
    cocktailListByIngredient: [],
    cocktailDetails: null
};

// Selectors
const getCocktailFeatureState = createFeatureSelector<CocktailState>("cocktails");

export const getCocktailsByFirstLetter = createSelector(
    getCocktailFeatureState,
    state => state.cocktailListByFirstLetter
);

export const getCocktailListByIngredient = createSelector(
    getCocktailFeatureState,
    state => state.cocktailListByIngredient
);

export const getCocktailDetails = createSelector(
    getCocktailFeatureState,
    state => state.cocktailDetails
);

export const cocktailsReducer = createReducer(
    initialState,
    on(CocktailActions.loadCocktailListByFirstLetterSuccess, (state, action): CocktailState => {
        return {
            ...state,
            cocktailListByFirstLetter: action.cocktailList
        };
    })
);
