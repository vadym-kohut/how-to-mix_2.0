import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ChosenIngredientsComponent } from "./chosen-ingredients/chosen-ingredients.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appReducer } from "./state/app.state";
import { CommonModule } from "@angular/common";
import { ChosenIngComponent } from "./chosen-ingredients/chosen-ing/chosen-ing.component";
import { environment } from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ChosenIngredientsComponent,
        PageNotFoundComponent,
        ChosenIngComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        HttpClientModule,
        StoreModule.forRoot(appReducer),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            name: "HowToMix App Devtools",
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
