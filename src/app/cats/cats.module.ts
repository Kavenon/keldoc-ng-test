import {NgModule} from '@angular/core';
import {CatsComponent} from './cats.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: CatsComponent,
    }]),
  ],
  exports: [RouterModule],
  declarations: [CatsComponent],
  providers: [],
})
export class CatsModule {
}
