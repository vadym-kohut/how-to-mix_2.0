import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../state/app.state";
import { Observable } from "rxjs";
import { getFavouriteIngredientList } from "../ingredients/state/ingredients.reducer";
import * as IngredientActions from "../ingredients/state/ingredients.actions";

@Component({
    selector: "htm-favourite-ingredients",
    templateUrl: "./favourite-ingredients.component.html",
    styleUrls: ["./favourite-ingredients.component.scss"]
})
export class FavouriteIngredientsComponent {

    favouriteIngredientList$: Observable<string[]> = this.store.select(getFavouriteIngredientList);

    constructor(
        private store: Store<State>
    ) {
    }

    removeFavouriteIngredient(ingredientToRemoveName: string) {
        this.store.dispatch(IngredientActions.removeFromFavouriteIngredientList({ ingredientToRemoveName }));
    }

    clearFavouriteIngredients() {
        this.store.dispatch(IngredientActions.clearFavouriteIngredientList());
    }

}
