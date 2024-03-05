import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CocktailDetails, CocktailListItem } from "../../models/cocktail.model";
import { RouterLink } from "@angular/router";

@Component({
    selector: "htm-cocktail-card",
    templateUrl: "./cocktail-card.component.html",
    styleUrls: ["./cocktail-card.component.scss"],
    standalone: true,
    imports: [RouterLink]
})
export class CocktailCardComponent {

    @Input() cocktailDetails!: CocktailDetails | CocktailListItem;
    @Output() addFavouriteCocktailEvent = new EventEmitter<CocktailListItem>();

    addFavouriteCocktail(cocktail: CocktailDetails | CocktailListItem) {
        this.addFavouriteCocktailEvent.emit(this.mapToCocktailListItem(cocktail));
    }

    mapToCocktailListItem(cocktail: CocktailDetails | CocktailListItem): CocktailListItem {
        return {
            strDrink: cocktail.strDrink,
            strDrinkThumb: cocktail.strDrinkThumb,
            idDrink: cocktail.idDrink
        };
    }

}
