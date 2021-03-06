import {Component, Input} from '@angular/core';
import {Cat} from '../cat.model';
import {Router} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {REMOVE_CAT} from '../cats.actions';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent {

  @Input() cats: Cat[];

  constructor(private router: Router, private store: Store<AppState>) {
  }

  deleteCat(cat: Cat): void {
    this.store.dispatch({type: REMOVE_CAT, payload: cat.id});
  }

  editCat(cat: Cat): void {
    this.router.navigate(['/cats/edit', cat.id]);
  }
}
