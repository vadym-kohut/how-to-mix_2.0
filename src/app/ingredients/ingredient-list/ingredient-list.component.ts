import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientDBService } from 'src/app/services/ingredient-db.service';

@Component({
    selector: 'app-ingredient-list',
    templateUrl: './ingredient-list.component.html',
    styleUrls: ['./ingredient-list.component.scss'],
})
export class IngredientListComponent implements OnInit {
    allIngredientsList$ = new Observable<any>();

    constructor(private ingredientDB: IngredientDBService) { }

    ngOnInit(): void {
        this.allIngredientsList$ = this.ingredientDB.getIngredientList$();
    }
}
