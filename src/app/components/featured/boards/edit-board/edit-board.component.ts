import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Board } from 'src/app/model/board';
import { BoardService } from 'src/app/services/board.service';
import { ModalService } from 'src/app/services/modal.service';
import { MyFormValidators } from 'src/app/validators/form.validators';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.scss'],
})
export class EditBoardComponent {

  @Input() board?: Board;

  visible = true;

  editBoardForm = new FormGroup({
    name: new FormControl<string>(``, [
      Validators.required,
      Validators.minLength(3),
      MyFormValidators.restrictedNames
    ])
  })

  constructor(
    private boardService: BoardService,
    private modalService: ModalService,
    private store: Store
  ) {
  }
  submit(id?: number) {
    this.store.dispatch({type: '[Edit Board Component] Edit Board', boardId: id, name: this.editBoardForm.value.name })
    this.modalService.close();
  }
}
