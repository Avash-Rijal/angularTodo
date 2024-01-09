import { Component } from '@angular/core';
import { Todo } from '../../todoCharacterstics';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent {
  localTodos: string | null;
  todoItem: Todo[];
  constructor() {
    this.localTodos = null;
    try {
      this.localTodos = localStorage.getItem('myTodos');
    } catch (e) {
      console.log('Error accessing localStorage:', e);
    }

    if (this.localTodos == null) {
      this.todoItem = [];
    } else {
      this.todoItem = JSON.parse(this.localTodos);
    }
  }

  addTodo(itemToBeAdded: Todo) {
    this.todoItem.push(itemToBeAdded);
    localStorage.setItem('myTodos', JSON.stringify(this.todoItem));
  }

  deleteTodo(itemTobeDeleted: Todo) {
    const index = this.todoItem.indexOf(itemTobeDeleted);
    this.todoItem.splice(index, 1);
    localStorage.setItem('myTodos', JSON.stringify(this.todoItem));
  }

  toggleTodo(itemToBeToggled: Todo) {
    const index = this.todoItem.indexOf(itemToBeToggled);
    console.log(this.todoItem[index].active);
    this.todoItem[index].active = !this.todoItem[index].active;
    localStorage.setItem('myTodos', JSON.stringify(this.todoItem));
  }
}
