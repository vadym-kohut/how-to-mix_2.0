import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, combineLatestWith, distinctUntilChanged, map, Observable, tap } from "rxjs";
import { IngredientListItem } from "../../../shared/models/ingredient.model";
import { getIngredientList, State } from "../state/ingredients.reducer";
import * as IngredientActions from "../state/ingredients.actions";
import { PaginationOptions } from "../../../shared/models/pagination-options";
import { PageEvent } from "@angular/material/paginator";

@Component({
    selector: "htm-ingredient-list",
    templateUrl: "./ingredient-list.component.html",
    styleUrls: ["./ingredient-list.component.scss"]
})
export class IngredientListComponent implements OnInit {

    paginationOptions: PaginationOptions = {
        length: 0,
        pageSizeOptions: [20, 50, 100],
        pageSize$: new BehaviorSubject<number>(20),
        showFirstLastButtons: true,
        pageIndex$: new BehaviorSubject<number>(0),
        pageChange: (event: PageEvent) => {
            this.paginationOptions.pageIndex$.next(event.pageIndex);
            this.paginationOptions.pageSize$.next(event.pageSize);
        }
    };
    allIngredientsList$: Observable<IngredientListItem[]> = this.store.select(getIngredientList).pipe(
        tap(allIngredientList => this.paginationOptions.length = allIngredientList.length),
        combineLatestWith(this.paginationOptions.pageIndex$.pipe(distinctUntilChanged()), this.paginationOptions.pageSize$.pipe(distinctUntilChanged())),
        map(([allIngredientList, pageIndex, pageSize]) => allIngredientList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize))
    );

    constructor(private store: Store<State>) {
    }

    ngOnInit(): void {
        this.store.dispatch(IngredientActions.loadIngredientList());
    }

    addChosenIngredient(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToChosenIngredientList({ ingredientName }));
    }

    addToStopList(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToStopList({ ingredientName }));
    }

    addFavouriteIngredient(ingredientName: string) {
        this.store.dispatch(IngredientActions.addToFavouriteIngredientList({ ingredientName }));
    }

}
