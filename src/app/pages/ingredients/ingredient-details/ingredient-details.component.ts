import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, switchMap } from "rxjs";
import { IngredientDetails } from "../../../shared/models/ingredient.model";
import { State, getIngredientDetails } from "../state/ingredients.reducer";
import * as IngredientActions from "../state/ingredients.actions";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-ingredient-details",
    templateUrl: "./ingredient-details.component.html",
    styleUrls: ["./ingredient-details.component.scss"]
})
export class IngredientDetailsComponent implements OnInit {

    ingredientDetails$ = new Observable<IngredientDetails | null>();

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap(params => {
                this.store.dispatch(IngredientActions.loadIngredientDetails({ ingredientName: params["name"] }));
                return this.ingredientDetails$ = this.store.select(getIngredientDetails);
            })
        ).subscribe();
    }

}
