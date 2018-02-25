import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { TodoSectionComponent } from './todo-section/todo-section.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodosComponent } from './todos.component';
import { TodosRoutes } from './todos.routes';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,        
        TodosRoutes,
    ],
    declarations: [
        TodosComponent,
        TodoSectionComponent,
        AddTodoComponent,
        EditTodoComponent
    ],
})
export class TodosModule { }
