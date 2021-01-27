import { Component, OnInit } from '@angular/core';

import { PortalSyncService } from '../services/portal-sync.service';

import { PortalSync } from '../interfaces/responses/PortalSync';
import { LogEntry } from '../interfaces/models/LogEntry';
import { UserIAPReceipt } from '../interfaces/models/UserIAPReceipt';
import { UserOfferReceipt } from '../interfaces/models/UserOfferReceipt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public loading: boolean = true;
  public portalSync: PortalSync;
  public logEntry: LogEntry[];
  public userIAPReceipts: UserIAPReceipt[];
  public userOfferReceipts: UserOfferReceipt[];

  constructor(public portalSyncService: PortalSyncService,) { }

  ngOnInit(): void {
    
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe((portalSyncResponse: PortalSync) => {
      const { 
        logEntries,
        userIAPReceipts,
        userOfferReceipts,
      } = portalSyncResponse;
      this.logEntry = logEntries;
      this.userIAPReceipts = userIAPReceipts;
      this.userOfferReceipts = userOfferReceipts;
      this.loading = false;
    });
  }

}
