import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../ingredient';

@Injectable({
  providedIn: 'root'
})
export class StopListService {

  private stopList$ = new BehaviorSubject<Ingredient[]>([]);

  constructor() { }

  getStopList$() {
    return this.stopList$.asObservable();
  }

  addToStopList(ing: Ingredient) {
    this.stopList$.next([...this.stopList$.getValue(), ing].filter((item, index, array) => index === array.indexOf(item)));
  }

  removeFromStopList(remIng: Ingredient) {
    this.stopList$.next(this.stopList$.getValue().filter((ing) => ing.idIngredient !== remIng.idIngredient));
  }
}
