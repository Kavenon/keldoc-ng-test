import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Cat} from '../cat.model';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.scss']
})
export class CatEditComponent implements OnInit {

  cat: Observable<Cat>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    // Todo: replace with ngrx.select by id call
    const catId = this.route.snapshot.params.id;
    this.cat = of({
      id: 1,
      name: 'cat1',
      age: 4,
    });
  }

}
