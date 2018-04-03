import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CatsEffects} from './cats/cats.effects';
import {CatsReducer} from './cats/cats.reducer';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({cats: CatsReducer}),
    EffectsModule.forRoot([CatsEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
