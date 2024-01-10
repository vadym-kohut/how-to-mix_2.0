import { ingredientsReducer, IngredientsState } from "../pages/ingredients/state/ingredients.reducer";

export interface State {
    ingredientState: IngredientsState;
}

export const appReducer = {
    ingredients: ingredientsReducer
};
