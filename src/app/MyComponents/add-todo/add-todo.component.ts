import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string;
  desc!:string;
  nextSrno: number = 1;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
onSubmit() {
const todo ={
  srno: this.nextSrno,
  title:this.title,
  desc:this.desc,
  active:true
}
this.nextSrno++;
this.todoAdd.emit(todo);
}

}
