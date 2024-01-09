import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSingleItemComponent } from './todo-single-item.component';

describe('TodoSingleItemComponent', () => {
  let component: TodoSingleItemComponent;
  let fixture: ComponentFixture<TodoSingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoSingleItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
