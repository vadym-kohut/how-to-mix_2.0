import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { CocktailDetails, CocktailListItem } from "../models/cocktail.model";

@Injectable({
    providedIn: "root"
})
export class CocktailDbService {

    constructor(private http: HttpClient) {
    }

    getCocktailListByFirstLetter$(firstLetter: string): Observable<CocktailDetails[]> {
        return this.http.get<{ drinks: CocktailDetails[] }>(
            "/api/json/v1/1/search.php",
            { params: { f: firstLetter } }
        ).pipe(
            map(data => data.drinks)
        );
    }

    getCocktailListByIngredient$(ingredientName: string): Observable<CocktailListItem[]> {
        return this.http.get<{ drinks: CocktailListItem[] }>(
            "/api/json/v1/1/filter.php",
            { params: { i: ingredientName } }
        ).pipe(
            map(data => data.drinks)
        );
    }

    getCocktailDetails$(id: string): Observable<CocktailDetails> {
        return this.http.get<{ drinks: CocktailDetails[] }>(
            "/api/json/v1/1/lookup.php",
            { params: { i: id } }
        ).pipe(
            map(data => data.drinks[0])
        );
    }

}
