import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { CocktailListItem } from "../../../shared/models/cocktail.model";

@Component({
  selector: 'app-cocktails-by-ingredient',
  templateUrl: './cocktails-by-ingredient.component.html',
  styleUrls: ['./cocktails-by-ingredient.component.scss']
})
export class CocktailsByIngredientComponent implements OnInit {

  cocktailsByIngredient$ = new Observable<CocktailListItem[]>();

  constructor(

  ) {
  }

  ngOnInit(): void {
  }

}
