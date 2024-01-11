import { Component, Input } from "@angular/core";
import { CocktailDetails } from "../../../../shared/models/cocktail.model";

@Component({
    selector: 'app-cocktail-card',
    templateUrl: './cocktail-card.component.html',
    styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent {
    @Input() cocktailDetails!: CocktailDetails;
}
