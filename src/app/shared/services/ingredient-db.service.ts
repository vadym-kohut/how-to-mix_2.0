import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { IngredientDetails, IngredientListItem, IngredientListResponse } from "../models/ingredient.model";

@Injectable({
  providedIn: 'root',
})
export class IngredientDBService {
  constructor(private http: HttpClient) { }

  getIngredientList$(): Observable<IngredientListItem[]> {
    return this.http
      .get<IngredientListResponse>('/api/json/v1/1/list.php', {
        params: { i: 'list' },
      })
      .pipe(
        map(res => res.drinks)
      );
  }

  getIngredientByName$(name: string) : Observable<IngredientDetails> {
      return this.http.get<{ ingredients: IngredientDetails }>(
          '/api/json/v1/1/search.php',
          {
              params: { i: name }
          }
      ).pipe(
          map(data=> data.ingredients)
      );
  }
}
