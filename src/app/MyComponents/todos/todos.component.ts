import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string | null;
  todos!:Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if (this.localItem===null) {
      this.todos =[ ]
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
deleteTodo(todo: Todo) {
  const idx = this.todos.indexOf(todo);
  this.todos.splice(idx,1);
  localStorage.setItem("todos", JSON.stringify(this.todos));
  console.log(todo);
}
addTodo(todo: Todo) {
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
toggleTodo(todo: Todo) {
  const idx = this.todos.indexOf(todo);
  this.todos[idx].active = !this.todos[idx].active;
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
}
