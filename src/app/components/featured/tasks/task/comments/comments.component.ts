import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Board } from 'src/app/model/board';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy  {

  @Input() boardId?: number;
  @Input() taskId?: number;

  comments: Comment[] = []
  commentedTaskId?: number
  comments$: Observable<Comment[]> = this.store.select(state => state.boards.find(board => board.id === this.boardId)?.tasks?.find(task => task.id === this.taskId)?.comments)
  subscription!: Subscription

  constructor(
    private store: Store<{ boards: Board[] }>
  ) { }

  ngOnInit(): void {
    // this.store.dispatch({ type: '[Task Component] Load Comments', taskId: this.taskId })
    
    this.subscription = this.comments$.subscribe(result => {
      if (result) {
        this.comments = [...result]
      } else {
        this.comments = []
      }
    })

  }
  
  deleteComment(comment: Comment, event:Event) {
    event.stopPropagation()
    this.store.dispatch({ type: '[Task Component] Delete Comment', comment })
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['task']?.currentValue.comments) {
  //     this.commentBox = true;
  //     this.controls = true;
  //   }
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  
}
