import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktails-by-ingredient',
  templateUrl: './cocktails-by-ingredient.component.html',
  styleUrls: ['./cocktails-by-ingredient.component.scss']
})
export class CocktailsByIngredientComponent {

  ingredient$!: Observable<any>;
  cocktailsByIng$!: Observable<any>;

}
