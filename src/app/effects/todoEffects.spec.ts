import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TodoEffects } from 'app/effects/todoEffects';
import { TodoService } from '../shared/services/todo.service';
import { Observable } from "rxjs/Observable";
import { TodoActions } from 'app/actions/todoAction';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';

describe('Todo Effect', () => {
    let runner: EffectsRunner;
    let todoEffects: TodoEffects;
    let todoService: TodoService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule
        ],
        providers: [
            todoEffects, TodoActions, todoService,
            { "provide": Http, "useValue": null }
        ]
    }));
    it('Call LOAD_TODOS_SUCCESS action after REQUEST_TODOS action',
        inject([
            EffectsRunner, todoEffects, todoService
        ],
            (_runner, _todoEffects, _todoService) => {
                runner = _runner;
                todoEffects = _todoEffects;
                todoService = _todoService;
                spyOn(todoService, 'loadTodos')
                    .and.returnValue(Observable.of(['name0']));
                runner.queue({ type: 'REQUEST_TODOS' });
                todoEffects.loadTodos$.subscribe(result => {
                    expect(result.type).toEqual(TodoActions.LOAD_TODOS_SUCCESS);
                    expect(result.payload[0]).toEqual('name0');
                });
            })
    );
});

