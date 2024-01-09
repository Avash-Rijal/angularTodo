import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todoCharacterstics';

@Component({
  selector: 'app-todo-single-item',
  templateUrl: './todo-single-item.component.html',
  styleUrl: './todo-single-item.component.css',
})
export class TodoSingleItemComponent {
  @Input() todoProps!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  onClick() {
    this.todoDelete.emit(this.todoProps);
    console.log('Clickeddddd');
  }

  onCheckBoxClick() {
    this.todoCheckBox.emit(this.todoProps);
  }
}
