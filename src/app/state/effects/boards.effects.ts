import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import { BoardService } from '../../services/board.service';
import { Board } from 'src/app/model/board';

@Injectable()
export class BoardsEffects {

  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[App] Load Boards'),
      mergeMap(() => this.boardService.getBoards()
        .pipe(
          map(boards => {
            return { type: '[Boards API] Boards Loaded Success', boards }
          }),
          catchError(() => of({ type: '[Boards API] Boards Loaded Error' }))
        )
      )
    )
  );
  loadTasksToBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Boards API] Boards Loaded Success'),
      mergeMap(() => {
        return this.taskService.getAll()
          .pipe(
            map(tasks => {
              return { type: '[Boards API] Tasks To Boards Loaded Success', tasks }
            }),
            catchError(() => of({ type: '[Boards API] Tasks To Boards Loaded Error' }))
          )
      })
    )
  );
   createBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Create Board Component] Create Board'),
      mergeMap((payload: any) => {
        return this.boardService.createBoard(payload.board)
          .pipe(
            map((board) => {
              return { type: '[Create Board Component] Create Board Success', board}
            }),
            catchError(() => of({ type: '[Boards API]  Create Board Error' }))
          )
      })
    )
  )
  editBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Edit Board Component] Edit Board'),
      mergeMap((payload: {boardId: number, name: string}) => {
        return this.boardService.editBoard(payload.boardId, payload.name)
          .pipe(
            map((board) => {
              return { type: '[Edit Board Component] Edit Board Success', board }
            }),
            catchError(() => of({ type: '[Edit Board Component] Edit Board Error' }))
          )
      })
    )
  )
  deleteBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Board Component] Delete Board'),
      mergeMap((payload: any) => {
        return this.boardService.deleteBoard(payload.board)
          .pipe(
            map((board) => {
              return { type: '[Boards API] Delete Board Success', board }
            }),
            catchError(() => of({ type: '[Board Component] Delete Board Error' }))
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