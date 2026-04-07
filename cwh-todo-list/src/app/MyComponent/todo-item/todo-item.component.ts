import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  deleteTodo(todo: Todo) {
    this.onDeleteTodo.emit(todo);
    console.log("Delete todo with sno:", this.todo.sno);
  }
}
