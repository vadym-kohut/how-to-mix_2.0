import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from "../../../state/app.state"
import * as IngredientsActions from './ingredients.actions';
import { IngredientListItem } from "../../../shared/interfaces/ingredientDetails";

export interface State extends AppState.State {
  ingredients: IngredientsState;
}

export interface IngredientsState {
  ingredientList: IngredientListItem[];
}

const initialState: IngredientsState = {
  ingredientList: []
}

// Selectors
const getProductFeatureState = createFeatureSelector<IngredientsState>('ingredients');

export const getIngredients = createSelector(
  getProductFeatureState,
  state => state.ingredientList
);

export const ingredientsReducer = createReducer(
  initialState,
  on(IngredientsActions.loadIngredientsSuccess, (state, action): IngredientsState => {
    return {
      ...state,
      ingredientList: action.ingredients
    }
  })
);
