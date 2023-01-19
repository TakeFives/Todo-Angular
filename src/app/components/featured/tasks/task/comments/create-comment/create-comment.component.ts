import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent {

  @Input() taskId?: number;
  @Input() boardId?: number;

  createCommentForm = new FormGroup({
    comment: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ])
  })

  constructor(
    private store: Store
  ) { }


  addComment() {
    // event.stopPropagation()

    if(this.createCommentForm.invalid) return

    this.store.dispatch({
      type: '[Task Component] Comment Task',
      taskId: this.taskId,
      comment: {
        createdAt: new Date,
        text: this.createCommentForm.value.comment,
        taskId: this.taskId,
        boardId: this.boardId
      }
    })

  }

}
