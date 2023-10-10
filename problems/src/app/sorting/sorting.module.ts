import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SortingRoutingModule } from './sorting-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InsertionSortComponent
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
    SharedModule,
  ],
  exports: [
    InsertionSortComponent,
  ]
})
export class SortingModule { }
