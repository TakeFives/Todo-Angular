import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentsComponent,
    CreateCommentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommentsComponent,
    CreateCommentComponent,

  ]
})
export class CommentsModule { }
