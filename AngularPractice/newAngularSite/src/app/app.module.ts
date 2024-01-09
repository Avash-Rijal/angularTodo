import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AddTodoItemComponent } from './MyComponents/add-todo-item/add-todo-item.component';
import { TodoSingleItemComponent } from './MyComponents/todo-single-item/todo-single-item.component';
import { TodolistComponent } from './MyComponents/todolist/todolist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './MyComponents/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoSingleItemComponent,
    AddTodoItemComponent,
    AboutPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
