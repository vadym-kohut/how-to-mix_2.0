import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IngredientDetails, IngredientListItem, IngredientListResponse } from "../models/ingredient.model";

@Injectable()
export class IngredientApiService {

    private apiUrl = "https://www.thecocktaildb.com/api/json/v1/1";

    constructor(private http: HttpClient) {
    }

    getIngredientList$(): Observable<IngredientListItem[]> {
        return this.http.get<IngredientListResponse>(`${this.apiUrl}/list.php`,
            { params: { i: "list" } }).pipe(
            map(response => response.drinks)
        );
    }

    getIngredientDetails$(name: string): Observable<IngredientDetails> {
        return this.http.get<{ ingredients: IngredientDetails[] }>(
            `${this.apiUrl}/search.php`,
            { params: { i: name } }
        ).pipe(
            map(response => response.ingredients[0])
        );
    }
}
