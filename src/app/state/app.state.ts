import { ingredientsReducer, IngredientsState } from "../pages/ingredients/state/ingredients.reducer";
import { cocktailsReducer, CocktailState } from "../pages/cocktails/state/cocktails.reducer";

export interface State {
    ingredientState: IngredientsState;
    cocktailsState: CocktailState;
}

export const appReducer = {
    ingredients: ingredientsReducer,
    cocktails: cocktailsReducer
};
