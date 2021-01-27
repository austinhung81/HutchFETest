import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PortalSyncService } from '../services/portal-sync.service';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { UserAppProfile } from '../interfaces/models/UserAppProfile';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  public portalSync: PortalSync;
  public userAppProfile: UserAppProfile[];
  
  constructor(
    public portalSyncService: PortalSyncService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe((portalSyncResponse: PortalSync) => {
      const { userProfile } = portalSyncResponse;
      this.userAppProfile = [userProfile];
    });
  }

  onUserClick(id: string): void {
    this.router.navigate(['user-detail', id ], { relativeTo: this.route });
  }

}
