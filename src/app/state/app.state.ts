import { ingredientsReducer, IngredientsState } from "../pages/ingredients/state/ingredients.reducer";

export interface State {
    ingredients: IngredientsState
}

export const appReducer = {
    ingredients: ingredientsReducer
}
