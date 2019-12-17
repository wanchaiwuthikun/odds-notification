import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OddsNotificationModule } from '../../../odds-notification/src/lib/odds-notification.module';

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
