import {Component, OnInit} from '@angular/core';
import {Todo} from "./shared/todo.model";
import {DataService} from "./shared/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  todos?: Todo[];
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm) {

    if (form.invalid) return this.showValidationErrors = true;

    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false
    form.reset();

    return 0;
  }

}
