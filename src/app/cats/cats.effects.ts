import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {GET_CATS, GET_CATS_ERROR, GET_CATS_SUCCESS} from './cats.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {CatsService} from './cats.service';
import {Cat} from './cat.model';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CatsEffects {

  @Effect()
  getCats$: Observable<any> = this.actions$
    .pipe(
      ofType(GET_CATS),
      mergeMap(() =>
        this.catsService.getCats().pipe(
          map((cats: Cat[]) => ({type: GET_CATS_SUCCESS, payload: cats})),
          catchError((error: any) => {
            console.error('Failed fetch cats', error);
            return of({type: GET_CATS_ERROR});
          })
        ),
      )
    );

  constructor(private actions$: Actions, private catsService: CatsService) {
  }
}
