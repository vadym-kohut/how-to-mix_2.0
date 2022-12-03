import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChosenIngredientsComponent } from './chosen-ingredients/chosen-ingredients.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RandomCocktailListComponent } from './random-cocktail-list/random-cocktail-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        ChosenIngredientsComponent,
        PageNotFoundComponent,
        RandomCocktailListComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, MatGridListModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
