import { Component } from "@angular/core";
import * as CocktailActions from "../cocktails/state/cocktails.actions";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { getFavouriteCocktailList, State } from "../cocktails/state/cocktails.reducer";

@Component({
    selector: "htm-favourite-cocktails",
    templateUrl: "./favourite-cocktails.component.html",
    styleUrls: ["./favourite-cocktails.component.scss"]
})
export class FavouriteCocktailsComponent {

    favoriteCocktailList$: Observable<string[]> = this.store.select(getFavouriteCocktailList);

    constructor(
        private store: Store<State>
    ) {
    }

    removeFavouriteCocktail(cocktailToRemoveName: string) {
        this.store.dispatch(CocktailActions.removeFromFavouriteCocktailList({ cocktailToRemoveName }));
    }

    clearFavouriteCocktails() {
        this.store.dispatch(CocktailActions.clearFavouriteCocktailList());
    }

}
