import {Component, OnInit} from '@angular/core';
import {Todo} from "./shared/todo.model";
import {DataService} from "./shared/data.service";
import {NgForm} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {EditTodoDialogComponent} from "../edit-todo-dialog/edit-todo-dialog.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  todos?: Todo[];
  showValidationErrors: boolean = false;

  constructor(private dataService: DataService, private dialog: MatDialog) {
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


  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(index: number, todo: Todo) {
    // this.dataService.updateTodo(index, todo)

    // const index = this.todos.indexOf(todo) -> to samo co zrobione w HTML w ngFor let i = index

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })

  }

}
