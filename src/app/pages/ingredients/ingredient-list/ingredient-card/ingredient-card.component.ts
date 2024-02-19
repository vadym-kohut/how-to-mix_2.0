import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'htm-ingredient-card',
    templateUrl: './ingredient-card.component.html',
    styleUrls: ['./ingredient-card.component.scss'],
})
export class IngredientCardComponent {

    @Input() ingredientName: string = '';
    @Output() choseIngredientEvent = new EventEmitter<string>();

    addChosenIngredient(ingredientName: string) {
        this.choseIngredientEvent.emit(ingredientName);
    }

    addToStopList(ingredientName: string) {

    }
}
