import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { getCocktailsByFirstLetter, getFirstLetter, State } from "../state/cocktails.reducer";
import * as CocktailActions from "../state/cocktails.actions";

@Component({
    selector: "htm-cocktail-list",
    templateUrl: "./cocktail-list.component.html",
    styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {

    cocktailList$: Observable<CocktailDetails[]> = this.store.select(getCocktailsByFirstLetter);
    firstLetter$: Observable<string> = this.store.select(getFirstLetter);

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(CocktailActions.loadCocktailListByFirstLetter());
    }

    addFavouriteCocktail(newCocktail: CocktailListItem) {
        this.store.dispatch(CocktailActions.addToFavouriteCocktailList({ newCocktail }));
    }

    choseFirstLetter(firstLetter: string) {
        this.store.dispatch(CocktailActions.choseFirstLetter({ firstLetter }));
    }

}
