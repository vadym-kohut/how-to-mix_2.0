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
}

const initialState: IngredientsState = {
    ingredientList: [],
    ingredientDetails: null
};

// Selectors
const getIngredientFeatureState = createFeatureSelector<IngredientsState>("ingredients");

export const getIngredients = createSelector(
    getIngredientFeatureState,
    state => state.ingredientList
);
export const getIngredientDetails = createSelector(
    getIngredientFeatureState,
    state => state.ingredientDetails
)

export const ingredientsReducer = createReducer(
    initialState,
    on(IngredientsActions.loadIngredientListSuccess, (state, action): IngredientsState => {
        return {
            ...state,
            ingredientList: action.ingredientList
        };
    }),
    on(IngredientsActions.loadIngredientDetailsSuccess, (state, action): IngredientsState => {
        return {
            ...state,
            ingredientDetails: action.ingredientDetails
        }
    })
);
