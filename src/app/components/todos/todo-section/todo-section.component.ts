import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from 'app/shared/model/todo';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import { TodoActions } from "app/actions/todoAction";


@Component({
  selector: 'todo-section',
  templateUrl: './todo-section.component.html',
  styleUrls: ['./todo-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoSectionComponent implements OnInit {

    todos$: Observable<Todo[]>;

  constructor(private store: Store<Todo>,
    private todoActions: TodoActions) {

  }

  ngOnInit() {
    this.todos$ = Observable.combineLatest(
      this.store.select('todo'),
      (todos: any) => {
        return todos.data ? todos.data : [];
      }
    );

    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(this.todoActions.loadTodos(''));
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch({ type: 'DELETE_TODO', payload: todo });
  }


}
