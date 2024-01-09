import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './MyComponents/todolist/todolist.component';
import { AboutPageComponent } from './MyComponents/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'angularTodo/about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
