import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientListComponent } from "./ingredient-list/ingredient-list.component";
import { IngredientsComponent } from "./ingredients.component";

const routes: Routes = [
    {
        path: "",
        component: IngredientsComponent,
        children: [
            { path: "", pathMatch: "full", redirectTo: "all" },
            { path: "all", component: IngredientListComponent },
            { path: "details/:name", component: IngredientDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientsRoutingModule {
}
