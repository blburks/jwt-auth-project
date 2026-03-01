import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard]
  }
];
    