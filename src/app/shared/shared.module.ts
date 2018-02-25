import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoService } from './services/todo.service';
import { TodoActions } from "app/actions/todoAction";
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        TodoListComponent,
        TodoFormComponent
    ],
    exports: [
        TodoListComponent,
        TodoFormComponent,
        RouterModule
    ],
      providers: [TodoActions, TodoService],
})
export class SharedModule { }
