import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: 'Dashboard'
    },
  },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: 'Users'
    },
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
