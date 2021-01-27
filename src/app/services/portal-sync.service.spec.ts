import { TestBed } from '@angular/core/testing';

import { PortalSyncService } from './portal-sync.service';

describe('PortalSyncService', () => {
  let service: PortalSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
