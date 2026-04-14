import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent, } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  localItem : string | null = null;
  
  constructor() { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('todos');

      if (this.localItem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: Todo) {
    console.log("Todo to delete:", todo);
    this.todos = this.todos.filter(t => t.sno !== todo.sno);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onAddTodo(todo: Todo) {
    console.log("Todo to add:", todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  checkTodo(todo: Todo) {
    console.log("Todo to check/uncheck:", todo);
    const index = this.todos.findIndex(t => t.sno === todo.sno);
    if (index !== -1) {
      this.todos[index].active = !this.todos[index].active;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
