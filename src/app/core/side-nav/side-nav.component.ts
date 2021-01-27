import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @HostBinding('class.expanded') expanded: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isSelected(route: string): boolean {
    const includeRoute: boolean = this.router.url.includes(route);
    return includeRoute;
  }

}
