import { Routes } from '@angular/router';
import { authGuard } from '../../core/helper';

export const l12Routes: Routes = [
  { path: '', redirectTo: '/Demo2', pathMatch: 'full' },
  {
    path: 'Demo2',
    canMatch: [authGuard],
    loadComponent: () => import('../l12/demo2/demo2.component').then(c => c.Demo2Component),
    data: {
      stateName: 'Demo2',
      breadcrumb: { name: 'Demo2', icon: 'fa-solid fa-ghost', afterBaseOnly: true},
    }
  },
]
