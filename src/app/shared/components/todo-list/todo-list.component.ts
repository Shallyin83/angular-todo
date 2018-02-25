import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos;

  @Output()
  deleteTodoEvent = new EventEmitter();

  ngOnInit() {
  }

  deleteTodo(todo) {
    const confirmDelete = confirm('Are you sure?');
    if (confirmDelete) {
      this.deleteTodoEvent.emit(todo);
    }
  }
}
