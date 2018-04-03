import {NgModule} from '@angular/core';
import {CatsComponent} from './cats.component';
import {RouterModule} from '@angular/router';
import {CatsListComponent} from './cats-list/cats-list.component';
import {SharedModule} from '../shared.module';
import {HumanAgePipe} from './human-age.pipe';
import {CatsListItemComponent} from './cats-list/cats-list-item/cats-list-item.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: CatsComponent,
    }]),
  ],
  exports: [RouterModule],
  declarations: [CatsComponent, CatsListComponent, HumanAgePipe, CatsListItemComponent],
  providers: [],
})
export class CatsModule {
}
