import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent {
    @Input() ingredientName: string = '';
}
