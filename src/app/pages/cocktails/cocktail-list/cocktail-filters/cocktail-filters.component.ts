import { Component, OnDestroy, OnInit } from "@angular/core";
import { debounceTime, Observable, Subscription } from "rxjs";
import { CocktailFilters } from "../../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { getCocktailFilters, State } from "../../state/cocktails.reducer";
import { cocktailFiltersChanged, loadCocktailFilters } from "../../state/cocktails.actions";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "htm-cocktail-filters",
    templateUrl: "./cocktail-filters.component.html",
    styleUrl: "./cocktail-filters.component.scss"
})
export class CocktailFiltersComponent implements OnInit, OnDestroy {

    cocktailFilters$: Observable<CocktailFilters> = this.store.select(getCocktailFilters);
    cocktailFilterForm = this.formBuilder.group({
        alcoholics: [[""]],
        categories: [[""]],
        glasses: [[""]]
    });
    private filterFormSubscription: Subscription;

    constructor(
        private store: Store<State>,
        private formBuilder: FormBuilder
    ) {
        this.filterFormSubscription = this.cocktailFilterForm.valueChanges.pipe(debounceTime(500)).subscribe(cocktailFilters =>
            this.store.dispatch(cocktailFiltersChanged({ cocktailFilters: cocktailFilters as CocktailFilters })));
    }

    ngOnDestroy(): void {
        this.filterFormSubscription.unsubscribe();
        this.store.dispatch(cocktailFiltersChanged({
            cocktailFilters: {
                alcoholics: [],
                categories: [],
                glasses: []
            }
        }));
    }

    ngOnInit(): void {
        this.store.dispatch(loadCocktailFilters());
    }

}
