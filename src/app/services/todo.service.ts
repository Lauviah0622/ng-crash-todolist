import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Todo2 } from '../models/Todo2'
// import {  } from 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos'

  todosLimit = '?_limit=5'


  constructor(private http:HttpClient) { }



  //getTodos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // toggle Complete
  toggleComplete(todo: Todo):Observable<any> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.put(url, todo, httpOptions) 
  }

  //deleto Todo on server
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`;
    console.log(this.http)

    return this.http.delete<Todo>(url, httpOptions)
  }




  // AddTodo
  addTodo(todo:Todo):Observable<Todo> {
    console.log(todo)
    return this.http.post<Todo>(this.todosURL, todo, httpOptions)
  }
}
