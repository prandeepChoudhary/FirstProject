import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Todo[] = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy groceries for the week.",
      active: true
    },
    {
      sno: 2,
      title: "Complete Angular project",
      desc: "Finish the Angular project for the client by the end of the week.",
      active: false
    },
    {
      sno: 3,
      title: "Workout",
      desc: "Go to the gym for a workout session in the evening.",
      active: true
    }
  ];

  deleteTodo(todo: Todo) {
    console.log("Todo to delete:", todo);
    this.todos = this.todos.filter(t => t.sno !== todo.sno);
  }
}
