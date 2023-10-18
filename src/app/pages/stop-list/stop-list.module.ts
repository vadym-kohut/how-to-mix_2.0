import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopListRoutingModule } from './stop-list-routing.module';
import { StopListComponent } from './stop-list.component';


@NgModule({
  declarations: [
    StopListComponent
  ],
  imports: [
    CommonModule,
    StopListRoutingModule
  ]
})
export class StopListModule { }
