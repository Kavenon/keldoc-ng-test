import {Routes} from '@angular/router';
import {CatsComponent} from './cats.component';
import {CatEditComponent} from './cat-edit/cat-edit.component';
import {CatAddComponent} from './cat-add/cat-add.component';

export const catsRoutes: Routes = [
  {
    path: '',
    component: CatsComponent,
  },
  {
    path: 'new',
    component: CatAddComponent,
  },
  {
    path: 'edit/:id',
    component: CatEditComponent,
  }
];
