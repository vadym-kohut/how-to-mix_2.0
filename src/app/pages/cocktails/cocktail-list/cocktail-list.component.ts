import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CocktailDetails } from "../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { getCocktailsByFirstLetter, State } from "../state/cocktails.reducer";
import * as CocktailActions from '../state/cocktails.actions';

@Component({
  selector: 'htm-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

    cocktailList$: Observable<CocktailDetails[]> = this.store.select(getCocktailsByFirstLetter);

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.store.dispatch(CocktailActions.loadCocktailListByFirstLetter({ firstLetter: 'a' }));
    }

}
