import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListratpComponent } from './components/listratp/listratp.component';

const appRoutes: Routes = [
  { path: 'list', component: ListratpComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: []
})
export class ListRoutingModule { }
