import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from "rxjs";
import { IngredientListItem } from "../interfaces/ingredientDetails";

type IngredientListResponse = {
  drinks: IngredientListItem[]
}

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
        tap(x => console.log('http.get: ', x)),
        map(res => res.drinks)
      );
  }
}
