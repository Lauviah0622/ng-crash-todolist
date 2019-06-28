import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'

import { Todo } from 'src/app/models/todo';
// 為什麼要import Input? 

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // console.log(this.todo)
  }

  //set dynamic classes

  setClasses() {
    let classes = {
      todo: true,
      'is-complete' : this.todo.completed

    }

    return classes
  }

onToggle(todo) {
  //toggle on UI
  todo.completed = !todo.completed;

  //toggle on server
  this.todoService.toggleComplete(todo).subscribe(todo => {console.log(todo)})
}

onDelete(todo) {
  this.deleteTodo.emit(todo);

}


}
