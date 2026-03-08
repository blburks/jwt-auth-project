import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then(m => m.Register)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AuthGuard, AdminGuard]
  }
];