import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { WebElementWrapperComponent } from '@micro-fe/angular/web-element-wrapper';

export interface WebElementWrapperOption {
  loadRemoteBunder: () => Promise<void>;
  selector: string,
}

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
    path: 'about',
    component: WebElementWrapperComponent,
    data: {
      loadRemoteBunder: () => import('about/Module'),
      selector: 'app-contact-root',
    } as WebElementWrapperOption,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
