import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from "../../../state/app.state";
import * as IngredientsActions from "./ingredients.actions";
import { IngredientDetails, IngredientListItem } from "../../../shared/models/ingredient.model";

export interface State extends AppState.State {
    ingredientState: IngredientsState;
}

export interface IngredientsState {
    ingredientList: IngredientListItem[];
    ingredientDetails: IngredientDetails | null;
    chosenIngredientList: string[];
    favouriteIngredientList: string[];
    stopList: string[];
}

const initialState: IngredientsState = {
    ingredientList: [],
    ingredientDetails: null,
    chosenIngredientList: ['Bourbon', 'Sweet Vermouth', 'Campari'],
    favouriteIngredientList: ['Rum', 'Scotch'],
    stopList: ['Orange bitters', 'Orange']
};

// Selectors
const getIngredientFeatureState = createFeatureSelector<IngredientsState>("ingredients");

export const getIngredientList = createSelector(
    getIngredientFeatureState,
    state => state.ingredientList
);
export const getIngredientDetails = createSelector(
    getIngredientFeatureState,
    state => state.ingredientDetails
);
export const getChosenIngredientList = createSelector(
    getIngredientFeatureState,
    state => state.chosenIngredientList
);
export const getFavouriteIngredientList = createSelector(
    getIngredientFeatureState,
    state => state.favouriteIngredientList
);
export const getStopList = createSelector(
    getIngredientFeatureState,
    state => state.stopList
);

export const ingredientsReducer = createReducer(
    initialState,
    // LOAD INGREDIENT LIST
    on(IngredientsActions.loadIngredientListSuccess, (state, { ingredientList }): IngredientsState => {
        return {
            ...state,
            ingredientList: ingredientList
        };
    }),
    // LOAD INGREDIENT DETAILS
    on(IngredientsActions.loadIngredientDetailsSuccess, (state, { ingredientDetails }): IngredientsState => {
        return {
            ...state,
            ingredientDetails: ingredientDetails
        };
    }),
    // CHOSEN INGREDIENT LIST
    on(IngredientsActions.addToChosenIngredientList, (state, { ingredientName }): IngredientsState => {
        return state.chosenIngredientList.includes(ingredientName) ? state :
            {
                ...state,
                chosenIngredientList: [...state.chosenIngredientList, ingredientName]
            };
    }),
    on(IngredientsActions.removeFromChosenIngredientList, (state, { ingredientToRemoveName }): IngredientsState => {
        return {
            ...state,
            chosenIngredientList: state.chosenIngredientList.filter(ingredientName => ingredientName !== ingredientToRemoveName)
        };
    }),
    on(IngredientsActions.clearChosenIngredientList, (state): IngredientsState => {
        return {
            ...state,
            chosenIngredientList: []
        };
    }),
    // FAVOURITE INGREDIENT LIST
    on(IngredientsActions.addToFavouriteIngredientList, (state, { ingredientName }): IngredientsState => {
        return state.favouriteIngredientList.includes(ingredientName) ? state :
            {
                ...state,
                favouriteIngredientList: [...state.favouriteIngredientList, ingredientName]
            };
    }),
    on(IngredientsActions.removeFromFavouriteIngredientList, (state, { ingredientToRemoveName }): IngredientsState => {
        return {
            ...state,
            favouriteIngredientList: state.favouriteIngredientList.filter(ingredientName => ingredientName !== ingredientToRemoveName)
        };
    }),
    on(IngredientsActions.clearFavouriteIngredientList, (state): IngredientsState => {
        return {
            ...state,
            favouriteIngredientList: []
        };
    }),
    // STOP LIST
    on(IngredientsActions.addToStopList, (state, { ingredientName }): IngredientsState => {
        return state.stopList.includes(ingredientName) ? state :
            {
                ...state,
                stopList: [...state.stopList, ingredientName]
            };
    }),
    on(IngredientsActions.removeFromStopList, (state, { ingredientToRemoveName }): IngredientsState => {
        return {
            ...state,
            stopList: state.stopList.filter(ingredientName => ingredientName !== ingredientToRemoveName)
        };
    }),
    on(IngredientsActions.clearStopList, (state): IngredientsState => {
        return {
            ...state,
            stopList: []
        };
    })
);
