import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SortingRoutingModule } from './sorting-routing.module';



@NgModule({
  declarations: [
    InsertionSortComponent
  ],
  imports: [
    CommonModule,
    SortingRoutingModule,
  ],
  exports: [
    InsertionSortComponent,
  ]
})
export class SortingModule { }
