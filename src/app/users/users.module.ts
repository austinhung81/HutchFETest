import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [UsersComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NzTableModule,
    NzAvatarModule,
    NzCollapseModule,
    NzTagModule,
    NzImageModule,
    NzTabsModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzInputNumberModule,
  ]
})
export class UsersModule { }
