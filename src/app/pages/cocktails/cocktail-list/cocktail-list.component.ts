import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { getAllCocktailsList, State } from "../state/cocktails.reducer";
import * as CocktailActions from "../state/cocktails.actions";

@Component({
    selector: "htm-cocktail-list",
    templateUrl: "./cocktail-list.component.html",
    styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {

    allCocktailsList$: Observable<CocktailDetails[]> = this.store.select(getAllCocktailsList);

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(CocktailActions.loadAllCocktailsList());
    }

    addFavouriteCocktail(newCocktail: CocktailListItem) {
        this.store.dispatch(CocktailActions.addToFavouriteCocktailList({ newCocktail }));
    }

}
