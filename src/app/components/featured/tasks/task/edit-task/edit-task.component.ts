import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/model/task';
import { Store } from '@ngrx/store';
import { MyFormValidators } from 'src/app/validators/form.validators';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent  {

  @Input() task!: Task;
  @Input() list!: Task[];

  editTaskForm = new FormGroup({
    name: new FormControl<string>(``, [
      Validators.required,
      Validators.minLength(3),
      MyFormValidators.restrictedNames
    ])
  })

  constructor(
    private taskService: TaskService,
    public modalService: ModalService,
    private store: Store
  ) { }

  editTask() {
    const newName = this.editTaskForm.value.name
    this.store.dispatch({type: '[Edit Task Component] Edit Task', task:{name: newName, id: this.task.id}})
    this.modalService.close()
  }

}
