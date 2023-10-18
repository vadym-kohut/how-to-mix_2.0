import { Component, OnInit } from '@angular/core';
import { ChosenIngService } from '../services/chosen-ing.service';
import { FavouriteIngredientsService } from '../services/favourite-ingredients.service';
import { Ingredient } from '../shared/interfaces/ingredient';
import { IngredientDBService } from '../services/ingredient-db.service';

@Component({
  selector: 'app-fovourite-ingredients',
  templateUrl: './fovourite-ingredients.component.html',
  styleUrls: ['./fovourite-ingredients.component.scss']
})
export class FovouriteIngredientsComponent implements OnInit {

  favouriteIngredients$ = this.favIngService.getFavIngs$();

  constructor(private ingStore: IngredientDBService, private favIngService: FavouriteIngredientsService, private chosenIngStore: ChosenIngService) { }

  addChosenIng(ing: Ingredient) {
    this.chosenIngStore.addChosenIng(ing);
    // this.ingStore.removeIng(ing);
  }

  dislike(disIng: Ingredient) {
    this.favIngService.dislike(disIng);

  }

  ngOnInit(): void {
  }

}
