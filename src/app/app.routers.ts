import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'cats',
    loadChildren: 'app/cats/cats.module#CatsModule',
  },
];
