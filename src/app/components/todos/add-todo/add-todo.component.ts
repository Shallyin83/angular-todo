import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from 'app/shared/model/todo';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<Todo>,
              private router: Router) {

  }

  ngOnInit() {
  }

  addTodo(todo: Todo) {
    this.store.dispatch({ type: 'ADD_TODO', payload: todo });
    this.router.navigate(['todos']);
  }

}
