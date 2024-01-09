import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todoCharacterstics';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css',
})
export class AddTodoItemComponent {
  title!: string;
  desc!: string;

  @Output() todoAddItem: EventEmitter<Todo> = new EventEmitter();
  onSubmit() {
    const todoItemToBeAdded: Todo = {
      sno: 55,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.todoAddItem.emit(todoItemToBeAdded);
  }
}
