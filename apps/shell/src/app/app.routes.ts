import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'contact',
    loadChildren: () => import('contact/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('home/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
