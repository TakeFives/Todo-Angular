import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/model/task';
import { Store } from '@ngrx/store';
import { MyFormValidators } from 'src/app/validators/form.validators';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnChanges {

  @Input() status!: string;
  @Input() board!: any;
  @Input() list!: Task[];

  addButton = true;
  addForm = false;

  createTaskForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      MyFormValidators.restrictedNames
    ])
  })

  constructor(
    private taskService: TaskService,
    private store: Store,
  ) {
  }

  addTask(event: any, status: string, board: number) {

   if(this.createTaskForm.invalid) {
    this.createTaskForm.get('name')?.markAsTouched()
    return
   }

    this.store.dispatch({
      type: '[Board Page] Add Task',
      task: {
        name: this.createTaskForm.value.name as string,
        status: status,
        createdAt: new Date,
        boardId: board,
        archived: false
      }
    })
    
    this.toggleView()
  }
  toggleView() {
    this.addButton = !this.addButton;
    this.addForm = !this.addForm;
    this.createTaskForm.get('name')?.markAsUntouched()
    this.createTaskForm.reset()
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.createTaskForm.reset()
    }
  }

}
