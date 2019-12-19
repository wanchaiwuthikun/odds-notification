import { NgModule } from '@angular/core';
import { OddsNotificationComponent } from './odds-notification.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OddsNotificationComponent],
  imports: [
    NgbPopoverModule,
    CommonModule
  ],
  exports: [OddsNotificationComponent]
})
export class OddsNotificationModule { }
