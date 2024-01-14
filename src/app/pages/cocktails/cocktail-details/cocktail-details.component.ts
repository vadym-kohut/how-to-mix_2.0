import { Component, OnInit } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { CocktailDetails } from "../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { State, getCocktailDetails } from "../state/cocktails.reducer";
import { ActivatedRoute } from "@angular/router";
import * as CocktailActions from "../state/cocktails.actions";

@Component({
    selector: "app-cocktail-details",
    templateUrl: "./cocktail-details.component.html",
    styleUrls: ["./cocktail-details.component.scss"]
})
export class CocktailDetailsComponent implements OnInit {

    cocktailDetails$ = new Observable<CocktailDetails | null>();

    constructor(
        private store: Store<State>,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap(params => {
                this.store.dispatch(CocktailActions.loadCocktailDetails({ id: params["id"] }));
                return this.cocktailDetails$ = this.store.select(getCocktailDetails);
            })
        ).subscribe();
    }


}
