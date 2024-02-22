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
    chosenIngredientList: IngredientListItem["strIngredient1"][];
    stopList: IngredientListItem["strIngredient1"][];
}

const initialState: IngredientsState = {
    ingredientList: [],
    ingredientDetails: null,
    chosenIngredientList: [],
    stopList: []
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
export const getStopList = createSelector(
    getIngredientFeatureState,
    state => state.stopList
);

export const ingredientsReducer = createReducer(
    initialState,
    on(IngredientsActions.loadIngredientListSuccess, (state, { ingredientList }): IngredientsState => {
        return {
            ...state,
            ingredientList: ingredientList
        };
    }),
    on(IngredientsActions.loadIngredientDetailsSuccess, (state, { ingredientDetails }): IngredientsState => {
        return {
            ...state,
            ingredientDetails: ingredientDetails
        };
    }),
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
