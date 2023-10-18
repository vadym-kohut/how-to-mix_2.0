import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../shared/interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class FavouriteIngredientsService {

  private favouriteIngredients$ = new BehaviorSubject<Ingredient[]>([]);

  constructor() { }

  getFavIngs$() {
    return this.favouriteIngredients$.asObservable();
  }

  addToFavIngs(ing: Ingredient) {
    this.favouriteIngredients$.next([...this.favouriteIngredients$.getValue(), ing].filter((item, index, array) => index === array.indexOf(item)));
  }

  dislike(disIng: Ingredient) {
    this.favouriteIngredients$.next(this.favouriteIngredients$.getValue().filter((ing) => ing.idIngredient !== disIng.idIngredient));
  }
}
