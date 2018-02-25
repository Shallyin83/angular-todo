import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Todo } from '../../shared/model/todo';
import {environment} from '../../../environments/environment';

@Injectable()
export class TodoService {
  private _baseUrl = environment.appApi.baseUrl;
  constructor(private http: Http) { }

  loadTodos(filter): Observable<Todo[]> {
    if (!filter) {
      return this.http.get(this._baseUrl + 'todo').map(res => res.json());
    }
    return this.http.get(this._baseUrl + 'todo?id=' + filter).map(res => res.json());
  }

  addTodo(todo: Todo): Observable<Object> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._baseUrl + 'todo', todo, options)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteTodo(todo: Todo): Observable<Object> {
    return this.http.delete(this._baseUrl + 'todo' + '/' + todo.id)
      .map((res) => todo)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateTodo(todo: Todo): Observable<Object> {
    return this.http.put(this._baseUrl + 'todo' + '/' + todo.id, todo)
      .map((res) => todo)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
