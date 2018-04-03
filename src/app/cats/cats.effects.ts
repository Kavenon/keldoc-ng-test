import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {
  ADD_CAT,
  ADD_CAT_ERROR,
  ADD_CAT_SUCCESS,
  GET_CATS,
  GET_CATS_ERROR,
  GET_CATS_SUCCESS,
  REMOVE_CAT,
  REMOVE_CAT_SUCCESS
} from './cats.actions';
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

  @Effect()
  addCat$: Observable<any> = this.actions$
    .pipe(
      ofType(ADD_CAT),
      mergeMap((action: any) =>
        this.catsService.addCat(action.payload).pipe(
          map((cat: Cat) => ({type: ADD_CAT_SUCCESS, payload: cat})),
          catchError((error: any) => {
            console.error('Failed add cats', error);
            return of({type: ADD_CAT_ERROR});
          })
        ),
      )
    );

  @Effect()
  removeCat$: Observable<any> = this.actions$
    .pipe(
      ofType(REMOVE_CAT),
      mergeMap((action: any) =>
        this.catsService.removeCat(action.payload).pipe(
          map(() => ({type: REMOVE_CAT_SUCCESS, payload: action.payload})),
        ),
      )
    );

  constructor(private actions$: Actions, private catsService: CatsService) {
  }
}
