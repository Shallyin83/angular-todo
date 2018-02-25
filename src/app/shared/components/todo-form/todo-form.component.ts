import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Todo } from "app/shared/model/todo";


@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todo: Todo = new Todo();
  @Output()
  addTodoEvent = new EventEmitter();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'name': [this.todo.name, Validators.required]
    })
  }

  ngOnInit() {
  }

  submitTodo() {
    if (this.form.valid) {
      this.addTodoEvent.emit(this.todo);
      this.todo = new Todo();
    }
  }
}
