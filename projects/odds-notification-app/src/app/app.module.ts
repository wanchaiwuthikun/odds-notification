import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddsNotificationModule } from 'dist/odds-notification';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, OddsNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
