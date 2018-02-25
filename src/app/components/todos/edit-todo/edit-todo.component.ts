import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/shared/model/todo';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/from';
import { TodoActions } from "app/actions/todoAction";

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  todo$: Observable<Todo[]>;
  todoId: number;
  
  constructor(private store: Store<Todo>,
              private router: Router,
              private todoActions: TodoActions,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.todoId = params['todoId'];
      if(!!this.todoId) {
        this.todo$ = Observable.combineLatest(
          this.store.select('todo'),
          (todo: any) => {
            return todo.data ? todo.data[0] : {};
          }
        );
    
        this.loadTodos();
      } 
    });
  }

  loadTodos() {
    this.store.dispatch(this.todoActions.loadTodos(this.todoId));
  }


  updateTodo(todo: Todo) {
    this.store.dispatch({ type: 'UPDATE_TODO', payload: todo });
    this.router.navigate(['todos']);
  }

}
