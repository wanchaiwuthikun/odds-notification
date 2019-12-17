import { NgModule } from '@angular/core';
import { OddsNotificationComponent } from './odds-notification.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [OddsNotificationComponent],
  imports: [
    NgbPopoverModule
  ],
  exports: [OddsNotificationComponent]
})
export class OddsNotificationModule { }
