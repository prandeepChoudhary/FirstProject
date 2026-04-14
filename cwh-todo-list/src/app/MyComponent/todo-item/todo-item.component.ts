import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onCheckTodo: EventEmitter<Todo> = new EventEmitter();
  
  deleteTodo(todo: Todo) {
    this.onDeleteTodo.emit(todo);
    console.log("Delete todo with sno:", this.todo.sno);
  }
  checkTodo(todo: Todo) {
    this.onCheckTodo.emit(todo);
    // this.todo.active = !this.todo.active;
    console.log("Checkbox clicked for todo with sno:", this.todo.sno, "Active status:", this.todo.active);
  }
}
