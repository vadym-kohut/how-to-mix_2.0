import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "../../state/app.state";
import { Observable } from "rxjs";
import { getStopList } from "../ingredients/state/ingredients.reducer";
import * as IngredientActions from "../ingredients/state/ingredients.actions";

@Component({
    selector: "htm-stop-list",
    templateUrl: "./stop-list.component.html",
    styleUrls: ["./stop-list.component.scss"]
})
export class StopListComponent {

    stopList$: Observable<string[]> = this.store.select(getStopList);

    constructor(
        private store: Store<State>
    ) {
    }

    removeFromStopList(ingredientToRemoveName: string) {
        this.store.dispatch(IngredientActions.removeFromStopList({ ingredientToRemoveName }));
    }

    clearStopList() {
        this.store.dispatch(IngredientActions.clearStopList());
    }

}
