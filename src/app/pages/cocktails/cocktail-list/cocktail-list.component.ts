import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatestWith, distinctUntilChanged, map, Observable, tap } from "rxjs";
import { CocktailDetails, CocktailListItem } from "../../../shared/models/cocktail.model";
import { Store } from "@ngrx/store";
import { getCocktailsList, State } from "../state/cocktails.reducer";
import * as CocktailActions from "../state/cocktails.actions";
import { PageEvent } from "@angular/material/paginator";
import { PaginationOptions } from "../../../shared/models/pagination-options";

@Component({
    selector: "htm-cocktail-list",
    templateUrl: "./cocktail-list.component.html",
    styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {

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
    allCocktailsList$: Observable<CocktailDetails[]> = this.store.select(getCocktailsList).pipe(
        tap(allCocktailsList => this.paginationOptions.length = allCocktailsList.length),
        combineLatestWith(this.paginationOptions.pageIndex$.pipe(distinctUntilChanged()), this.paginationOptions.pageSize$.pipe(distinctUntilChanged())),
        map(([allCocktailsList, pageIndex, pageSize]) => allCocktailsList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize))
    );

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
