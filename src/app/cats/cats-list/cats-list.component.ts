import {Component, Input} from '@angular/core';
import {Cat} from '../cat.model';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent {

  @Input() cats: Cat[];

}
