import {Component} from '@angular/core';
import {Cat} from '../cat.model';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {ADD_CAT} from '../cats.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.scss']
})
export class CatAddComponent {

  constructor(private store: Store<AppState>, private router: Router) {
  }

  addCat(cat: Cat): void {
    this.store.dispatch({type: ADD_CAT, payload: cat});
    // Todo: navigation should be called after ADD_CAT_SUCCESS, but for 2h limit I leave it here
    // Node: with this approach, list after reload may not contain new element.
    this.router.navigate(['/cats']);
  }

}
