import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListratpComponent } from './components/listratp/listratp.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    ListRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  declarations: [ListratpComponent],
exports: [ListratpComponent]
})
export class ListModule { }
