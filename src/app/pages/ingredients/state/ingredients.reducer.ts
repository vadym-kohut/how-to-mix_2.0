import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from "../../../state/app.state";
import * as IngredientsActions from "./ingredients.actions";
import { IngredientDetails, IngredientListItem } from "../../../shared/models/ingredient.model";

export interface State extends AppState.State {
    ingredientState: IngredientsState;
}

export interface IngredientsState {
    ingredientList: IngredientListItem[];
    chosenIngredientList: IngredientListItem[];
    ingredientDetails: IngredientDetails | null;
}

const initialState: IngredientsState = {
    ingredientList: [],
    chosenIngredientList: [],
    ingredientDetails: null
};

// Selectors
const getIngredientFeatureState = createFeatureSelector<IngredientsState>("ingredients");

export const getIngredients = createSelector(
    getIngredientFeatureState,
    state => state.ingredientList
);
export const getChosenIngredientList = createSelector(
    getIngredientFeatureState,
    state => state.chosenIngredientList
);
export const getIngredientDetails = createSelector(
    getIngredientFeatureState,
    state => state.ingredientDetails
);

export const ingredientsReducer = createReducer(
    initialState,
    on(IngredientsActions.loadIngredientListSuccess, (state, { ingredientList }): IngredientsState => {
        return {
            ...state,
            ingredientList: ingredientList
        };
    }),
    on(IngredientsActions.addToChosenIngredientList, (state, { ingredient }): IngredientsState => {
        return {
            ...state,
            chosenIngredientList: [...state.chosenIngredientList, ingredient]
        };
    }),
    on(IngredientsActions.loadIngredientDetailsSuccess, (state, { ingredientDetails }): IngredientsState => {
        return {
            ...state,
            ingredientDetails: ingredientDetails
        };
    })
);
