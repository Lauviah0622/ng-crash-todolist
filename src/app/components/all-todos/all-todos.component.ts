import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  @Input() todolist: Todo[];
  @Output() deleteTodoFromAll: EventEmitter<Todo> = new EventEmitter();
  @Output() foo = new EventEmitter


  constructor(private todoService:TodoService) { }

  ngOnInit() {
    console.log(this.todolist);
  }

  onDelete(todo) {
    this.deleteTodoFromAll.emit(todo);
  
  }

  onFire() {
    this.foo.emit('123123123')
  }




}
