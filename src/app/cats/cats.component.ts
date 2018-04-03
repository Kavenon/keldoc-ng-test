import {Component, OnInit} from '@angular/core';
import {Cat} from './cat.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats: Observable<Cat[]>;

  ngOnInit(): void {
    // Todo: replace with ngrx.select statement
    this.cats = of([{
      name: 'cat1',
      age: 4,
    }]);
  }
}
