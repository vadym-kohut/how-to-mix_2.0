import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'htm-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent {

    @Input() ingredientName: string = '';
    @Output() addChosenIngredientEvent = new EventEmitter<string>();
    @Output() addToStopListEvent = new EventEmitter<string>();

    addChosenIngredient(ingredientName: string) {
        this.addChosenIngredientEvent.emit(ingredientName);
    }

    addToStopList(ingredientName: string) {
        this.addToStopListEvent.emit(ingredientName);
    }
}
