import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StopListComponent } from './stop-list.component';

const routes: Routes = [{ path: '', component: StopListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StopListRoutingModule { }
