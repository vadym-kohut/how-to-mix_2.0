import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../shared/interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ChosenIngService {

  private chosenIngs$ = new BehaviorSubject<any[]>([])

  constructor() { }

  getChosenIng$() {
    return this.chosenIngs$.asObservable();
  }

  addChosenIng(ing: any) {

    const idIngredientExists = this.chosenIngs$.getValue().find(i => i.idIngredient == ing.idIngredient);

    const strIngredient1Exists = this.chosenIngs$.getValue().find(i => i.strIngredient1 == ing.strIngredient1);

    if (!idIngredientExists || !strIngredient1Exists) {
      this.chosenIngs$.next([...this.chosenIngs$.getValue(), ing]);
    }

    console.log(idIngredientExists, strIngredient1Exists);

  }

  removeChosenIng(remIng: Ingredient) {
    this.chosenIngs$.next(this.chosenIngs$.getValue().filter((ing) => ing.idIngredient !== remIng.idIngredient));
  }
}

//idIngredient
//strIngredient1
