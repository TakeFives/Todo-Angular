import { createAction, props } from "@ngrx/store";
import { Task } from "src/app/model/task";
import { Comment } from "src/app/model/comment";

// add task

export const addTask = createAction('[Board Page] Add Task', props<{ task: Task }>())
export const addTaskSuccess = createAction('[Tasks API] Add Task Success', props<{ task: Task }>())
export const addTaskError = createAction('[Tasks API] Add Task Error')

// delete task

export const deleteTask = createAction('[Task Component] Delete Task', props<{ task: Task }>())
export const deleteTaskSuccess = createAction('[Task Component] Delete Task Success', props<{ task: Task }>() )
export const deleteTaskError = createAction('[Task Component] Delete Task Success')

// edit task

export const editTask = createAction('[Edit Task Component] Edit Task', props<{ task: Task }>())
export const editTaskSuccess = createAction('[Edit Task Component] Edit Task Success', props<{ task: Task }>())
export const editTaskError = createAction('[Edit Task Component] Edit Task Success', props<{ task: Task }>())

// archive task

export const archiveTask = createAction('[Task Component] Archive Task', props<{ task: Task  }>())
export const archiveTaskSuccess = createAction('[Task Component] Archive Task Success', props<{ task: Task }>())
export const archiveTaskError = createAction('[Task Component] Archive Task Error')

// load comments to task

export const loadComments = createAction('[Task Component] Load Comments', props<{ TaskId: number }>())
export const loadCommentsSuccess = createAction('[Task Component] Load Comments Success', props<{ comments: Comment[] }>())
export const loadCommentsError = createAction('[Task Component] Load Comments Error')

// comment task

export const commentTask = createAction('[Task Component] Comment Task', props<{ id: number }>())
export const commentTaskSuccess = createAction('[Task Component] Comment Task Success', props<{ comment: Comment }>())
export const commentTaskError = createAction('[Task Component] Comment Task Error')

// delete comment

export const deleteComment = createAction('[Task Component] Delete Comment', props<{ comment: Comment }>())
export const deleteCommentSuccess = createAction('[Task Component] Delete Comment Success', props<{ comment: Comment }>() )
export const deleteCommentError = createAction('[Task Component] Delete Comment Error')

// drop task

export const dropTask = createAction('[Task List Component] Drop Task', props<{ TaskId: number, newStatus: string}>())
export const dropTaskSuccess = createAction('[Task List Component] Drop Task Success', props<{ task: Task}>())
export const dropTaskError = createAction('[Task List Component] Drop Task Succes Error')