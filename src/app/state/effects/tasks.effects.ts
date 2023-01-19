import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap, concatMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import { BoardService } from '../../services/board.service';
import { Task } from 'src/app/model/task';

@Injectable()
export class TasksEffects {

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Board Page] Add Task'),
      mergeMap((payload: { task: Task }) => {
        return this.taskService.createTask(payload.task)
          .pipe(
            map((task) => {
              return { type: '[Tasks API] Add Task Success', task }
            }),
            catchError(() => of({ type: '[Tasks API] Add Task Error' }))
          )
      })
    )
  )
  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Edit Task Component] Edit Task'),
      mergeMap((payload: any) => {
        console.log('edit effect');

        return this.taskService.editTaskName(payload.task.name, payload.task.id)
          .pipe(
            map((task) => {
              return { type: '[Edit Task Component] Edit Task Success', task }
            }),
            catchError(() => of({ type: '[Tasks API] Edit Task Error' }))

          )
      })
    )
  )
  archiveTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task Component] Archive Task'),
      mergeMap((payload: { task: Task }) => {
        return this.taskService.archiveTask(payload.task)
          .pipe(
            map((task) => {
              return { type: '[Task Component] Archive Task Success', task }
            })
          )
      })
    )
  )
  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task Component] Delete Task'),
      mergeMap((payload: any) => {
        return this.taskService.deleteTask(payload.task)
          .pipe(
            map((task) => {
              return { type: '[Task Component] Delete Task Success', task }
            }),
            catchError(() => of({ type: '[Task Component] Delete Task Error' }))

          )
      })
    )
  )
  dropTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task List Component] Drop Task'),
      mergeMap((payload: any) => {
        return this.taskService.editTaskStatus(payload.id, payload.newStatus)
          .pipe(
            map((task) => {
              return { type: '[Task List Component] Drop Task Success', task }
            }),
            catchError(() => of({ type: '[Task List Component] Drop Task Succes Error' }))
          )
      })
    )
  )

  // comments

  loadCommentsToTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task Component] Load Comments'),
      mergeMap((payload: any) => {
        return this.taskService.getComments(payload.taskId)
          .pipe(
            map((comments) => {
              return { type: '[Task Component] Load Comments Success', comments }
            }),
            catchError(() => of({ type: '[Task Component] Load Comments Error' }))
          )
      })
    )
  )
  commentTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task Component] Comment Task'),
      mergeMap((payload: any) => {
        return this.taskService.commentTask(payload.taskId, payload.comment)
        .pipe(
          map((comment) => {
              return { type: '[Task Component] Comment Task Success', comment }
            }),
            catchError(() => of({ type: '[Task Component] Comment Task Error' }))
          )
      })
    )
  )
  deleteComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task Component] Delete Comment'),
      concatMap((payload: any) => {
        return this.taskService.deleteComment(payload.comment)
          .pipe(
            map((comment) => {
              return { type: '[Task Component] Delete Comment Success', comment }
            }),
            catchError(() => of({ type: '[Task Component] Delete Comment Error' }))
          )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private taskService: TaskService
  ) { }
}