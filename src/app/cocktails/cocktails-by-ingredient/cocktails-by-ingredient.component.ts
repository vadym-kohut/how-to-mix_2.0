import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailDBService } from 'src/app/services/cocktail-db.service';

@Component({
  selector: 'app-cocktails-by-ingredient',
  templateUrl: './cocktails-by-ingredient.component.html',
  styleUrls: ['./cocktails-by-ingredient.component.scss']
})
export class CocktailsByIngredientComponent implements OnInit {

  ingredient$!: Observable<any>;
  cocktailsByIng$!: Observable<any>;

  constructor(private route: ActivatedRoute, private cocktailDB: CocktailDBService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.cocktailsByIng$ = this.cocktailDB.getCocktailByIngredient(params['ing']);
      this.ingredient$ = params['ing'];
    });
  }

}
