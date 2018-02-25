import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { TodoService } from "../shared/services/todo.service";
import { TodoActions } from "app/actions/todoAction";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private todoActions: TodoActions
    ) { }

    @Effect()
    loadTodos$: Observable<Action> = this.actions$
        .ofType('REQUEST_TODOS')
        .switchMap(action => this.todoService.loadTodos(action.payload))
        .map((todos: any) => this.todoActions.loadTodosSuccess(todos)
        );

    @Effect() addTodo$ = this.actions$
        .ofType('ADD_TODO')
        .map(action => action.payload)
        .switchMap(todo => this.todoService.addTodo(todo))
        .map(todo => this.todoActions.addTodoSuccess(todo));


    @Effect() deleteTodo$ = this.actions$
        .ofType('DELETE_TODO')
        .map(action => action.payload)
        .switchMap(todo => this.todoService.deleteTodo(todo))
        .map(todo => this.todoActions.deleteTodoSuccess(todo));

    @Effect() updateTodo$ = this.actions$
        .ofType('UPDATE_TODO')
        .map(action => action.payload)
        .switchMap(todo => this.todoService.updateTodo(todo))
        .map(todo => this.todoActions.updateTodoSuccess(todo));
}