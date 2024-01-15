import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { CocktailDetails, CocktailDetailsResponse, CocktailListItem } from "../models/cocktail.model";

@Injectable({
    providedIn: "root"
})
export class CocktailDbService {

    constructor(private http: HttpClient) {
    }

    getCocktailListByFirstLetter$(firstLetter: string): Observable<CocktailDetails[]> {
        return this.http.get<{ drinks: CocktailDetails[] }>(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php",
            { params: { f: firstLetter } }
        ).pipe(
            map(data => data.drinks)
        );
    }

    getCocktailListByIngredient$(ingredientName: string): Observable<CocktailListItem[]> {
        return this.http.get<{ drinks: CocktailListItem[] }>(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php",
            { params: { i: ingredientName } }
        ).pipe(
            map(data => data.drinks)
        );
    }

    getCocktailDetails$(id: string): Observable<CocktailDetails> {
        return this.http.get<{ drinks: CocktailDetailsResponse[] }>(
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php",
            { params: { i: id } }
        ).pipe(
            map(data => data.drinks[0]),
            map(cocktailDetails => {
                const ingredientList: CocktailDetails["ingredientList"] = [];
                for (let i = 1; i <= 15; i++) {
                    const ingredientName = cocktailDetails[`strIngredient${i}` as keyof CocktailDetailsResponse];
                    const ingredientMeasure = cocktailDetails[`strMeasure${i}` as keyof CocktailDetailsResponse];
                    ingredientName && ingredientMeasure && ingredientList.push({ ingredientName, ingredientMeasure });
                    delete cocktailDetails[`strIngredient${i}` as keyof CocktailDetailsResponse];
                    delete cocktailDetails[`strMeasure${i}` as keyof CocktailDetailsResponse];
                }
                return { ...cocktailDetails, ingredientList };
            })
        );
    }

}
