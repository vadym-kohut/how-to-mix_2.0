import * as CocktailActions from "./cocktails.actions";
import * as AppState from "../../../state/app.state";
import { CocktailDetails } from "../../../shared/models/cocktail.model";
import { createFeatureSelector, createReducer, createSelector } from "@ngrx/store";

export interface State extends AppState.State {
    cocktailState: CocktailState;
}

export interface CocktailState {
    cocktailListByFirstLetter: CocktailDetails[];
    cocktailDetails: CocktailDetails | null;
}

const initialState: CocktailState = {
    cocktailListByFirstLetter: [],
    cocktailDetails: null
}

// Selectors
const getCocktailFeatureState = createFeatureSelector<CocktailState>("cocktails");

export const getCocktailsByFirstLetter = createSelector(
    getCocktailFeatureState,
    state => state.cocktailListByFirstLetter
);

export const getCocktailDetails = createSelector(
    getCocktailFeatureState,
    state => state.cocktailDetails
);

export const cocktailsReducer = createReducer(
    initialState
);
