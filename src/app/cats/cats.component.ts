import {Component, OnInit} from '@angular/core';
import {Cat} from './cat.model';
import {Observable} from 'rxjs/Observable';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {GET_CATS} from './cats.actions';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats: Observable<Cat[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch({type: GET_CATS});
    this.cats = this.store.select((state: AppState) => state.cats.cats);
  }
}
