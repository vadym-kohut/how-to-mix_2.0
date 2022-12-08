import { ingredientsReducer, IngredientsState } from "../ingredients/state/ingredients.reducer";

export interface State {
    ingredients: IngredientsState
}

export const appReducer = {
    ingredients: ingredientsReducer
}
