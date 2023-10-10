import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingModule } from './sorting/sorting.module';
import { WelcomeModule } from './welcome/welcome.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SortingModule,
    WelcomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
