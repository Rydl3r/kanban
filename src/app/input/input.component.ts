import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputForm = new FormGroup({
    description: new FormControl(),
    status: new FormControl('Status'),
  })

  @Output() inputDataEmitter = new EventEmitter<Todo>();

  onSubmit() {
    if (this.inputForm.valid) {
      console.log(this.inputForm.value)
      this.inputDataEmitter.emit(this.inputForm.value)
      this.inputForm.reset()
    } else {
      alert('The input is invalid. Please, try again')
    }

  }
}
