import { createReducer, on } from '@ngrx/store';
import { Board } from 'src/app/model/board';
import { Comment } from 'src/app/model/comment';
import { createBoard, editBoard, deleteBoard, loadBoards, loadBoardsSuccess, loadTasksToBoards, loadTasksToBoardsSuccess, createBoardSuccess, editBoardSuccess, deleteBoardSuccess } from '../actions/boards.actions';
import { addTask, addTaskSuccess, archiveTask, archiveTaskSuccess, commentTask, commentTaskSuccess, deleteComment, deleteCommentSuccess, deleteTask, deleteTaskSuccess, dropTask, dropTaskSuccess, editTask, editTaskSuccess, loadComments, loadCommentsSuccess } from '../actions/tasks.actions';

export const initialState: Board[] = []

export const boardsReducer = createReducer(
  initialState,
  on(loadBoards, (state) => state),
  on(loadBoardsSuccess, (state, payload) => {
    return payload.boards
  }),
  on(loadTasksToBoards, (state) => state),
  on(loadTasksToBoardsSuccess, (state, payload) => {
    const newState = state.map(board => {
      return {
        ...board,
        tasks: payload.tasks.filter((task: any) => task.boardId === board.id)
      }
    })
    return newState
  }),
  on(createBoard, (state) => state),
  on(createBoardSuccess, (state, payload) => {
    return [...state, { ...payload.board }]
  }),
  on(editBoard, (state) => state),
  on(editBoardSuccess, (state, payload) => {
    if (!payload.board) {
      return [
        ...state
      ]
    }

    const newState = [
      ...state.map(board => {
        
        if (board.id !== payload.board.id) {
          // console.log('board to edit', board);
          
          return board
        }
        
        return {
          ...payload.board,
          tasks: board.tasks
        }
      })
    ]
    return newState
  }),
  on(deleteBoard, (state) => state),
  on(deleteBoardSuccess, (state, payload) => {
    return [...state.filter(board => board.id !== payload.board.id)]
  }),

  // tasks
  on(addTask, (state) => state),
  on(addTaskSuccess, (state, payload) => {
    if (!payload.task) {
      return [
        ...state
      ]
    }
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.task.boardId) {
          return board
        }

        if (board.tasks) {
          return {
            ...board,
            tasks: [...board.tasks, payload.task]
          }
        } else {
          return {
            ...board,
            tasks: [payload.task]
          }
        }
      })
    ]

    return newState
  }),
  on(deleteTask, state => state),
  on(deleteTaskSuccess, (state, payload) => {
    if (!payload.task) {
      return [
        ...state
      ]
    }
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.task.boardId) {
          return board
        }

        if (board.tasks) {
          return {
            ...board,
            tasks: board.tasks.filter(task => task.id !== payload.task.id)
          }
        } else {
          return {
            ...board
          }
        }
      })
    ]

    return newState
  }),

  on(editTask, state => state),
  on(editTaskSuccess, (state, payload) => {
    if (!payload.task) {
      return [
        ...state
      ]
    }
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.task.boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map(task => {
            if (task.id !== payload.task.id) {
              return task
            }

            return {
              ...task,
              name: payload.task.name
            }
          })
        }
      })

    ]

    return newState
  }),

  on(archiveTask, state => state),
  on(archiveTaskSuccess, (state, payload) => {
    if (!payload) {
      return [
        ...state
      ]
    }
    // return state
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.task.boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map(task => {
            if (task.id !== payload.task.id) {
              return task
            }

            return {
              ...task,
              archived: true
            }
          })
        }
      })

    ]

    return newState
  }),

  // comments
  on(loadComments, state => state),
  on(loadCommentsSuccess, (state, payload) => {
    if (!payload.comments.length) {
      return [
        ...state
      ]
    }
    // return state
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.comments[0].boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map(task => {
            if (task.id !== payload.comments[0].taskId) {
              return task
            }

            const newComments = []
            if (payload.comments) {
              newComments.push(...payload.comments)
            }

            return {
              ...task,
              comments: newComments
            }
          })
        }
      })

    ]

    return newState
  }),


  on(commentTask, state => state),
  on(commentTaskSuccess, (state, payload) => {
    if (!payload) {
      return [
        ...state
      ]
    }
    // return state
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.comment.boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map(task => {
            if (task.id !== payload.comment.taskId) {
              return task
            }


            const newComments = task.comments ? [...task.comments] : []
            if (payload.comment) {
              newComments.push(payload.comment)
            }

            return {
              ...task,
              comments: newComments
            }
          })
        }
      })

    ]

    return newState
  }),

  on(deleteComment, state => state),
  on(deleteCommentSuccess, (state, payload) => {

    if (!payload.comment) {
      return [
        ...state
      ]
    }

    // return state
    const newState = [
      ...state.map((board: Board) => {
        if (board.id !== payload.comment.boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map((task) => {
            if (task.id !== payload.comment.taskId) {
              return task
            }

            return {
              ...task,
              comments: task.comments.filter((comment: Comment) => comment.id !== payload.comment.id)
            }
          })
        }
      })

    ]

    return newState

  }),

  // drag and drop 

  on(dropTask, state => state),
  on(dropTaskSuccess, (state, payload) => {
    if (!payload) {
      return [
        ...state
      ]
    }
    // return state
    const newState = [
      ...state.map(board => {
        if (board.id !== payload.task.boardId) {
          return board
        }

        const newTasks = []
        if (board.tasks) {
          newTasks.push(...board.tasks)
        }

        return {
          ...board,
          tasks: newTasks.map(task => {
            if (task.id !== payload.task.id) {
              return task
            }

            return {
              ...task,
              status: payload.task.status
            }
          })
        }
      })

    ]

    return newState
  })
)
