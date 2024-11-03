import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'populares',
    loadComponent: () => import('./pages/populares/populares.page').then( m => m.PopularesPage)
  },
  {
    path: 'nuevas',
    loadComponent: () => import('./pages/nuevas/nuevas.page').then( m => m.NuevasPage)
  },
  {
    path: 'recomendaciones',
    loadComponent: () => import('./pages/recomendaciones/recomendaciones.page').then( m => m.RecomendacionesPage)
  },
];
