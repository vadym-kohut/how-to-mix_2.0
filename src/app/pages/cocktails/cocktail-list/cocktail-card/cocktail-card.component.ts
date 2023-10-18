import { Component } from '@angular/core';

@Component({
    selector: 'app-cocktail-card',
    templateUrl: './cocktail-card.component.html',
    styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent {
    cocktailName = 'Margarita';
    cocktailCategory = 'Ordinary Drink';
}
