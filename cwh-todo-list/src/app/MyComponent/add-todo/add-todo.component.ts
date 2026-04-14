import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();  

  onSubmit() {
    const todo = {
      sno: Date.now(),
      title: this.title,
      desc: this.desc,
      active: true,
    };
    console.log('New Todo:', todo);
    this.onAddTodo.emit(todo);
    
    this.title = '';
    this.desc = '';
  }
}
