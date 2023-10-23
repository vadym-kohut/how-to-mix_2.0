import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIngredients, State } from '../state/ingredients.reducer';
import * as IngredientActions from '../state/ingredients.actions';
import { Ingredient } from "../../../shared/interfaces/ingredient";

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
    allIngredientsList$ = new Observable<Ingredient[]>();

    constructor(private store: Store<State>) { }

    ngOnInit(): void {
        this.allIngredientsList$ = this.store.select(getIngredients);
        this.store.dispatch(IngredientActions.loadIngredients())
    }
}
