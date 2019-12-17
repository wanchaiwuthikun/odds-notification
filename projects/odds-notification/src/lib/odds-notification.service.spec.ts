import { TestBed } from '@angular/core/testing';

import { OddsNotificationService } from './odds-notification.service';

describe('OddsNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OddsNotificationService = TestBed.get(OddsNotificationService);
    expect(service).toBeTruthy();
  });
});
