import {NgModule} from '@angular/core';
import {CatsComponent} from './cats.component';
import {RouterModule} from '@angular/router';
import {CatsListComponent} from './cats-list/cats-list.component';
import {SharedModule} from '../shared.module';
import {HumanAgePipe} from './human-age.pipe';
import {CatsListItemComponent} from './cats-list/cats-list-item/cats-list-item.component';
import {CatAddComponent} from './cat-add/cat-add.component';
import {CatFormComponent} from './cat-form/cat-form.component';
import {CatEditComponent} from './cat-edit/cat-edit.component';
import {catsRoutes} from './cats.routes';
import {CatsService} from './cats.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {CatsEffects} from './cats.effects';
import {CatsReducer} from './cats.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(catsRoutes),
    StoreModule.forFeature('cats', CatsReducer),
    EffectsModule.forFeature([CatsEffects])
  ],
  exports: [RouterModule],
  declarations: [CatsComponent, CatsListComponent, HumanAgePipe,
    CatsListItemComponent, CatAddComponent, CatFormComponent, CatEditComponent],
  providers: [CatsService],
})
export class CatsModule {
}
