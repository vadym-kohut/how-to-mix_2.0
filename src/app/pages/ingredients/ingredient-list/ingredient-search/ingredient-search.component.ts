import { Component, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { getIngredientSearchResults, State } from "../../state/ingredients.reducer";
import { debounceTime, Observable, Subscription, tap } from "rxjs";
import * as IngredientActions from "../../state/ingredients.actions";
import { IngredientListItem } from "../../../../shared/models/ingredient.model";
import { FormControl } from "@angular/forms";

@Component({
    selector: "htm-ingredient-search",
    templateUrl: "./ingredient-search.component.html",
    styleUrl: "./ingredient-search.component.scss"
})
export class IngredientSearchComponent implements OnDestroy {

    ingredientSearchQuery = new FormControl();
    isNoResultsVisible = false;
    ingredientSearchResults$: Observable<IngredientListItem[]> = this.store.select(getIngredientSearchResults).pipe(
        tap(ingredientList => {
            this.isNoResultsVisible = !!(!ingredientList.length && this.ingredientSearchQuery.getRawValue());
        })
    );
    private searchSubscription: Subscription;

    constructor(
        private store: Store<State>
    ) {
        this.searchSubscription = this.ingredientSearchQuery.valueChanges.pipe(
            debounceTime(500)
        ).subscribe(ingredientSearchQuery => this.changeIngredientQuery(ingredientSearchQuery));
    }

    ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
        this.store.dispatch(IngredientActions.ingredientSearchQueryChange({ ingredientSearchQuery: "" }));
    }

    changeIngredientQuery(ingredientSearchQuery: string) {
        this.store.dispatch(IngredientActions.ingredientSearchQueryChange({ ingredientSearchQuery }));
    }

}
