import {Component, Input} from '@angular/core';
import {Cat} from '../cat.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent {

  @Input() cats: Cat[];

  constructor(private router: Router) {
  }

  deleteCat(cat: Cat): void {
    // Todo: implement
  }

  editCat(cat: Cat): void {
    this.router.navigate(['/cats/edit', cat.id]);
  }
}
