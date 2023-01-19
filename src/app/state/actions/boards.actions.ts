import { createAction, props } from "@ngrx/store";
import { Board } from "src/app/model/board";

// load boards

export const loadBoards = createAction('[App] Load Boards')
export const loadBoardsSuccess = createAction('[Boards API] Boards Loaded Success', props<{ boards: Board[]}>())
export const loadBoardsError = createAction('[Boards API] Boards Loaded Success')

// load tasks to boards

export const loadTasksToBoards = createAction('[Boards Page] Load Tasks')
export const loadTasksToBoardsSuccess = createAction('[Boards API] Tasks To Boards Loaded Success', props<{ tasks: Task[]}>())

// create board

export const createBoard = createAction('[Create Board Component] Create Board', props<{ board: Board }>())
export const createBoardSuccess = createAction('[Create Board Component] Create Board Success', props<{ board: Board }>())
export const createBoardError = createAction('[Create Board Component] Create Board Error')

// edit board 

export const editBoard = createAction('[Edit Board Component] Edit Board',  props<{ id: number }>())
export const editBoardSuccess = createAction('[Edit Board Component] Edit Board Success',  props<{ board: Board }>())
export const editBoardError = createAction('[Edit Board Component] Edit Board Error')

// delete board

export const deleteBoard = createAction('[Board Component] Delete Board', props<{ board:Board }>())
export const deleteBoardSuccess = createAction('[Boards API] Delete Board Success', props<{ board: Board}>())
export const deleteBoardError = createAction('[Boards API] Delete Board Error')