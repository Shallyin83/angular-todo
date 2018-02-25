import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSectionComponent } from './todo-section.component';
import { TodoService } from '../../../shared/services/todo.service';
import { FormsModule } from '@angular/forms';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { TodoActions } from "../../../actions/todoAction";
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { todo } from '../../../reducers/todo';

describe('TodoSectionComponent', () => {
  let component: TodoSectionComponent;
  let fixture: ComponentFixture<TodoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule, RouterTestingModule.withRoutes([]),
        StoreModule.provideStore({ todo })],
      providers: [TodoService],
      declarations: [TodoSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
