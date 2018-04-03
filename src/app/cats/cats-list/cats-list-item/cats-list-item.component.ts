import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cat} from '../../cat.model';

@Component({
  selector: 'app-cats-list-item',
  templateUrl: './cats-list-item.component.html',
  styleUrls: ['./cats-list-item.component.scss']
})
export class CatsListItemComponent {

  @Input() cat: Cat;
  @Output() onEdit: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

}
