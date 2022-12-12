import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Test'),
    new Todo('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda culpa cupiditate dignissimos distinctio dolorem dolorum est hic ipsa maiores minus modi molestias nam nesciunt odit porro sapiente vel voluptate?', true),
    new Todo('Lorem ipsum')

  ];

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updateTodo: Todo) {
    this.todos[index] = updateTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

}
