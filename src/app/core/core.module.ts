import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { PageHeaderComponent } from './page-header/page-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [PageHeaderComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NzMenuModule,
    NzIconModule,
  ],
  exports: [
    PageHeaderComponent,
    SideNavComponent,
  ]
})
export class CoreModule { }
