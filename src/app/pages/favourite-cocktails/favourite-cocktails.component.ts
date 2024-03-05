import { Component } from "@angular/core";
import * as CocktailActions from "../cocktails/state/cocktails.actions";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getFavouriteCocktailList, State } from "../cocktails/state/cocktails.reducer";
import { CocktailListItem } from "../../shared/models/cocktail.model";

@Component({
    selector: "htm-favourite-cocktails",
    templateUrl: "./favourite-cocktails.component.html",
    styleUrls: ["./favourite-cocktails.component.scss"]
})
export class FavouriteCocktailsComponent {

    favoriteCocktailList$: Observable<CocktailListItem[]> = this.store.select(getFavouriteCocktailList);

    constructor(
        private store: Store<State>
    ) {
    }

    removeFavouriteCocktail(cocktailToRemove: CocktailListItem) {
        this.store.dispatch(CocktailActions.removeFromFavouriteCocktailList({ cocktailToRemove }));
    }

    clearFavouriteCocktails() {
        this.store.dispatch(CocktailActions.clearFavouriteCocktailList());
    }

}
