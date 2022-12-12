import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Todo} from "../todos/shared/todo.model";

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {

  showValidationErrors: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) { }

  onFormSubmit(form: NgForm) {

    if (form.invalid) return  this.showValidationErrors = true;

    const updatedTodo = {
      ...this.todo,
      ...form.value
    }

    this.dialogRef.close(updatedTodo)

    this.showValidationErrors = false;

    return 0;
  }

  close() {
    this.dialogRef.close();
  }

}
