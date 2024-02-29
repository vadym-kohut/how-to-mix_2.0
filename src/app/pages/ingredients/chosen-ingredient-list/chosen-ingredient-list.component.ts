import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getChosenIngredientList, State } from "../state/ingredients.reducer";
import * as IngredientActions from "../state/ingredients.actions";

@Component({
    selector: "htm-chosen-ingredient-list",
    templateUrl: "./chosen-ingredient-list.component.html",
    styleUrl: "./chosen-ingredient-list.component.scss"
})
export class ChosenIngredientListComponent {

    chosenIngredientList$: Observable<string[]> = this.store.select(getChosenIngredientList);

    constructor(
        private store: Store<State>
    ) {
    }

    removeChosenIngredient(ingredientToRemoveName: string) {
        this.store.dispatch(IngredientActions.removeFromChosenIngredientList({ ingredientToRemoveName }));
    }

    clearChosenIngredientList() {
        this.store.dispatch(IngredientActions.clearChosenIngredientList());
    }

}
