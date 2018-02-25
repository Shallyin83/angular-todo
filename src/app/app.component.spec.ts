import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { TodoService } from './shared/services/todo.service';
import { TodoActions } from "app/actions/todoAction";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent
      ],
      providers: [TodoService, TodoActions], 
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



});
