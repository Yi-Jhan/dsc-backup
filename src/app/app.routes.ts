import { Routes } from '@angular/router';
import { privilegeResolver } from './core/helper';
import { loginResolver } from './shared/component/login/login.resolver';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: 'Login', resolve: { isLogin: loginResolver, privilege: privilegeResolver }, loadComponent: () => import('./shared/component/login/login.component').then(c => c.LoginComponent) },
  ...environment.routes,
  {
    path: '**',
    loadComponent: () => import('./shared/component/error/error.component').then(c => c.ErrorComponent),
    data: {
      stateName: 'PageNotFound',
      breadcrumb: { name: 'Page Not Found', icon: 'fa-solid fa-file-circle-xmark', afterBaseOnly: true, terminalOnly: true},
    }
  }
];
