import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'  //import自訂的型別
import { TodoService } from '../../services/todo.service';

//test
// import {Word} from '../../models/Word'

//用ng generate component 來建立新的component
@Component({
  selector: 'app-todos',  //在HTML裡面會是甚麼樣的TAG
  templateUrl: './todos.component.html',  //這個東西的模板HTML會是甚麼
  styleUrls: ['./todos.component.css']  //這個東西用甚麼CSS
})
export class TodosComponent implements OnInit {
  todos:Todo[];//這裡用了自訂的model (型別?)  所以要import自訂的型別
  //上面的型別不是Todo 而是Todo[]是不是代表可以放進去多的Todo?
  str:string = 'str'

  constructor(private todoService:TodoService) {}

  ngOnInit() { //這個 Oninit到底可以幹嘛？是甚麼東西？???
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    console.log(this.todoService);
    //Remove Form UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    // 利用todoService.deleteTodo
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log(todo)
    });
  }

  foo(event) {
    console.log(event)
  }
}
