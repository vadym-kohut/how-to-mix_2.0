import { Component } from "@angular/core";

@Component({
    selector: "htm-ingredient-search",
    templateUrl: "./ingredient-search.component.html",
    styleUrl: "./ingredient-search.component.scss"
})
export class IngredientSearchComponent {

    ingredientSearchQuery = "";

    logChange() {
        console.log("ingredientSearchQuery: ", this.ingredientSearchQuery);
    }

}
