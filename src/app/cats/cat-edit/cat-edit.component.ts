import {Component, OnInit} from '@angular/core';
import {Cat} from '../cat.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {EDIT_CAT} from '../cats.actions';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.scss']
})
export class CatEditComponent implements OnInit {

  cat: Cat;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    // Todo: This could be replaced with getById selector.
    this.store.select((state: AppState) => state.cats.cats).subscribe((cats: Cat[]) => {
      this.cat = cats.find((cat: Cat) => cat.id === +this.route.snapshot.params.id);
    });
  }

  editCat(cat: Cat): void {
    this.store.dispatch({type: EDIT_CAT, payload: cat});
    // Todo: navigation should be called after ADD_CAT_SUCCESS, but for 2h limit I leave it here
    // Node: with this approach, list after reload may not contain new element.
    this.router.navigate(['/cats']);
  }

}
