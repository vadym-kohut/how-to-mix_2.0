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
    favouriteCocktailList: string[];
}

const initialState: CocktailState = {
    cocktailListByFirstLetter: [],
    cocktailListByIngredient: [],
    cocktailDetails: null,
    favouriteCocktailList: []
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
export const getFavouriteCocktailList = createSelector(
    getCocktailFeatureState,
    state => state.favouriteCocktailList
);

export const cocktailsReducer = createReducer(
    initialState,
    // LOAD COCKTAIL LIST
    on(CocktailActions.loadCocktailListByFirstLetterSuccess, (state, { cocktailList }): CocktailState => {
        return {
            ...state,
            cocktailListByFirstLetter: cocktailList
        };
    }),
    // LOAD COCKTAIL LIST BY INGREDIENT
    on(CocktailActions.loadCocktailListByIngredientSuccess, (state, { cocktailList }): CocktailState => {
        return {
            ...state,
            cocktailListByIngredient: cocktailList
        };
    }),
    // LOAD COCKTAIL DETAILS
    on(CocktailActions.loadCocktailDetailsSuccess, (state, { cocktailDetails }): CocktailState => {
        return {
            ...state,
            cocktailDetails: cocktailDetails
        };
    }),
    // FAVOURITE COCKTAIL LIST
    on(CocktailActions.addToFavouriteCocktailList, (state, { cocktailName }): CocktailState => {
        return state.favouriteCocktailList.includes(cocktailName) ? state :
            {
                ...state,
                favouriteCocktailList: [...state.favouriteCocktailList, cocktailName]
            };
    }),
    on(CocktailActions.removeFromFavouriteCocktailList, (state, { cocktailToRemoveName }): CocktailState => {
        return {
            ...state,
            favouriteCocktailList: state.favouriteCocktailList.filter(cocktailName => cocktailName !== cocktailToRemoveName)
        };
    }),
    on(CocktailActions.clearFavouriteCocktailList, (state): CocktailState => {
        return {
            ...state,
            favouriteCocktailList: []
        };
    })
);
