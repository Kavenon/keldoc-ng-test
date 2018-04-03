import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cat} from '../cat.model';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Cat> = new EventEmitter<Cat>();
  @Input() cat: Cat;

  catForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.catForm = formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z -]*')]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(25)]],
    });
  }

  ngOnInit() {
    if (this.cat) {
      this.catForm.setValue(this.cat);
    }
  }

  submit(): void {
    if (this.catForm.valid) {
      this.onSubmit.emit(this.catForm.value);
    }
  }

}
