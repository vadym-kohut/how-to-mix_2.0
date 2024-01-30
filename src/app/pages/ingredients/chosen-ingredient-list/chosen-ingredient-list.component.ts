import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IngredientListItem } from "../../../shared/models/ingredient.model";
import { Store } from "@ngrx/store";
import { getChosenIngredientList, State } from "../state/ingredients.reducer";
import * as IngredientActions from "../state/ingredients.actions";

@Component({
    selector: "htm-chosen-ingredient-list",
    templateUrl: "./chosen-ingredient-list.component.html",
    styleUrl: "./chosen-ingredient-list.component.scss"
})
export class ChosenIngredientListComponent implements OnInit {

    chosenIngredientList$ = new Observable<IngredientListItem["strIngredient1"][]>();

    constructor(private store: Store<State>) {
    }

    ngOnInit(): void {
        this.chosenIngredientList$ = this.store.select(getChosenIngredientList);
    }

    removeChosenIngredient(ingredientToRemoveName: IngredientListItem["strIngredient1"]) {
        this.store.dispatch(IngredientActions.removeFromChosenIngredientList({ ingredientToRemoveName }));
    }
}
