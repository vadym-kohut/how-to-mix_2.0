import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChosenIngredientsComponent } from './chosen-ingredients/chosen-ingredients.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ChosenIngredientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
