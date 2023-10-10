import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';

const routes: Routes = [
  { path: 'sorting/insertion', component: InsertionSortComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
