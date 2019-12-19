import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

interface NotificationModel {
  id?: number;
  message?: string;
  date?: string | Date;
  link?: string;
}

interface NotificationLatestList {
  notification: NotificationModel[];
  total: number;
}
@Component({
  selector: 'odds-notification',
  templateUrl: './odds-notification.component.html',
  styleUrls: ['./odds-notification.component.scss']
})
export class OddsNotificationComponent implements OnInit {
  readonly close = './assets/icon/close.svg';
  notificationStatus: Observable<boolean>;

  @Input() hide = false;
  @Input() notificationLatest: NotificationLatestList = { notification: [], total: 0 };

  constructor() { }

  ngOnInit() {
  }

  onClickNotification() {
    this.removeRedDotOverNotificationBell();
  }

  removeRedDotOverNotificationBell() {
    this.setNotificationStatus(of(false));
  }

  setNotificationStatus(status: Observable<boolean>) {
    this.notificationStatus = status;
  }

  goShowAllPage() {
    // ***
  }
}
