import { Component, OnInit } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { CocktailListItem } from "../../../shared/models/cocktail.model";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { State, getCocktailListByIngredient } from "../state/cocktails.reducer";
import * as CocktailActions from "../state/cocktails.actions";

@Component({
    selector: "app-cocktails-by-ingredient",
    templateUrl: "./cocktails-by-ingredient.component.html",
    styleUrls: ["./cocktails-by-ingredient.component.scss"]
})
export class CocktailsByIngredientComponent implements OnInit {

    cocktailListByIngredient$ = new Observable<CocktailListItem[]>();

    constructor(
        private route: ActivatedRoute,
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap(params => {
                this.store.dispatch(CocktailActions.loadCocktailListByIngredient({ ingredientName: params["ingredient"] }));
                return this.cocktailListByIngredient$ = this.store.select(getCocktailListByIngredient);
            })
        ).subscribe();
    }

}
