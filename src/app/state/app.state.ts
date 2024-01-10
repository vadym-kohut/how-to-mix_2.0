import { ingredientsReducer, IngredientsState } from "../pages/ingredients/state/ingredients.reducer";

export interface State {
    ingredientList: IngredientsState;
}

export const appReducer = {
    ingredients: ingredientsReducer
};
