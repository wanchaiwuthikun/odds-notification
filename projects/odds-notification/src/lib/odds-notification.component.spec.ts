import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsNotificationComponent } from './odds-notification.component';

describe('OddsNotificationComponent', () => {
  let component: OddsNotificationComponent;
  let fixture: ComponentFixture<OddsNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddsNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
