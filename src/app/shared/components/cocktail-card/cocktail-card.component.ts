import { Component, Input } from "@angular/core";
import { CocktailDetails, CocktailListItem } from "../../models/cocktail.model";

@Component({
    selector: "htm-cocktail-card",
    templateUrl: "./cocktail-card.component.html",
    styleUrls: ["./cocktail-card.component.scss"],
    standalone: true
})
export class CocktailCardComponent {
    @Input() cocktailDetails!: CocktailDetails | CocktailListItem;
}
