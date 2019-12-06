import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayOneComponent } from './src/app/day-one/day-one.component';
import { DayTwoComponent } from './src/app/day-two/day-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
    DayTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
