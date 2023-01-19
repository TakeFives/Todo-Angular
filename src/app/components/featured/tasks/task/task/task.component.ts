import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/model/task';
import { Comment } from 'src/app/model/comment';
import { ModalService } from 'src/app/services/modal.service';
import { TaskService } from 'src/app/services/task.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Board } from 'src/app/model/board';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnChanges {

  controls = false;
  commentBox = false;
  commentedTaskId?: number

  @Input() task!: Task
  @Input() list!: Task[]
  @Input() boardId?: number

  @Output() editTaskEvent = new EventEmitter<Task>()
  @Output() editTaskList = new EventEmitter<Task[]>()

  constructor(
    public modalService: ModalService,
    private store: Store<{ boards: Board[] }>
  ) { }

  deleteTask(event: Event, task: Task) {
    event.stopPropagation();
    this.store.dispatch({ type: '[Task Component] Delete Task', task })
  }

  archiveTask(event: Event, task: Task) {
    event.stopPropagation();
    this.store.dispatch({ type: '[Task Component] Archive Task', task })
  }

  // comments

  getComments(event: Event, id?: number) {
    event.stopPropagation();
    this.commentedTaskId = id
    if (this.task.comments) return
    this.store.dispatch({ type: '[Task Component] Load Comments', taskId: this.commentedTaskId })
  }

  toggleControls(event: Event) {
    event.stopPropagation();
    this.controls = !this.controls

  }
  toggleCommentBox(event: Event) {
    event.stopPropagation();
    this.commentBox = !this.commentBox
  }

  setEditTask(task?: Task) {
    this.editTaskEvent.emit(task)
  }
  setEditTaskList(list: Task[]) {
    this.editTaskList.emit(list)
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['task']?.currentValue.comments) {
      this.commentBox = true;
      this.controls = true;
    }
  }

}

