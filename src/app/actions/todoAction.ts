import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
@Injectable()
export class TodoActions {
    static REQUEST_TODOS = 'REQUEST_TODOS';
    loadTodos(filter): Action {
        return {
            type: TodoActions.REQUEST_TODOS,
            payload: filter
        };
    }
    static LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
    loadTodosSuccess(todos): Action {
        return {
            type: TodoActions.LOAD_TODOS_SUCCESS,
            payload:todos
        };
    }
    static ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
    addTodoSuccess(todo): Action {
        return {
            type: TodoActions.ADD_TODO_SUCCESS,
            payload: todo
        };
    }

    static DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
    deleteTodoSuccess(todo): Action {
        return {
            type: TodoActions.DELETE_TODO_SUCCESS,
            payload: todo
        };
    }

    static UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
    updateTodoSuccess(todo): Action {
        return {
            type: TodoActions.UPDATE_TODO_SUCCESS,
            payload: todo
        };
    }
}