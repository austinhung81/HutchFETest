import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hutch Admin Portal';
  isCollapsed = true;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
