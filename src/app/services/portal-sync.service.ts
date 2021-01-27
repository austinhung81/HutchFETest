import { Injectable } from '@angular/core';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { MockPortalSync } from '../mockdata/PortalSync';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalSyncService {

  constructor() { }

  getPortalSync(appVersion: string, dataVersion: string, adminToken: string): Observable<PortalSync> {
    return of(MockPortalSync);
  }
}
