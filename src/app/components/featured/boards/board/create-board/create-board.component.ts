import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal.service';
import { MyFormValidators } from 'src/app/validators/form.validators';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent  {

  createBoardForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      MyFormValidators.restrictedNames
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(10)
    ])
  })

  constructor(
    private modalService: ModalService,
    private store: Store
  ) { }

  submit() {

    if(this.createBoardForm.valid){
      this.store.dispatch(
        {
          type: '[Create Board Component] Create Board',
          board: {
            name: this.createBoardForm.value.name as string,
            description: this.createBoardForm.value.description as string,
            createdAt: new Date
          }
        })
      this.modalService.close()
    }

  }
}
