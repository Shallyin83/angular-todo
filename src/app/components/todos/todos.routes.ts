import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoSectionComponent } from './todo-section/todo-section.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodosComponent } from './todos.component';
import { AuthGuard } from '../../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TodoSectionComponent,
      },
      {
        path: 'new',
        component: AddTodoComponent,
      },
      {
        path: 'edit/:todoId',
        component: EditTodoComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutes { }
