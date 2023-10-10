import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SortingModule } from '../sorting/sorting.module';
import { ModuleEnum } from './enum/module.enum';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SortingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
