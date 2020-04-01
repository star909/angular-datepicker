import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './modules/datepicker/datepicker.component';

const routes: Routes = [
  { path: '', component:DatepickerComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }