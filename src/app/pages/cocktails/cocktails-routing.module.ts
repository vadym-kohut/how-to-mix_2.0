import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CocktailDetailsComponent } from "./cocktail-details/cocktail-details.component";
import { CocktailListComponent } from "./cocktail-list/cocktail-list.component";
import { CocktailsByIngredientComponent } from "./cocktails-by-ingredient/cocktails-by-ingredient.component";
import { CocktailsComponent } from "./cocktails.component";

const routes: Routes = [
    {
        path: "",
        component: CocktailsComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "all" },
            { path: "all", component: CocktailListComponent },
            { path: "details/:id", component: CocktailDetailsComponent },
            { path: "by-ingredient/:ingredient", component: CocktailsByIngredientComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CocktailsRoutingModule {
}
