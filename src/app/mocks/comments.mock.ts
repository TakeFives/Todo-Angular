import { Comment } from "../model/comment";

export const taskComments: Comment[] = [
  {
    createdAt: new Date,
    text: "test comment",
    taskId: 1,
    boardId: 1,
    id: 1
  },
  {
    createdAt: new Date,
    text: "",
    taskId: 2,
    boardId: 1,
    id: 2
  },
  {
    createdAt: new Date,
    text: "",
    taskId: 3,
    boardId: 1,
    id: 3
  },
  {
    createdAt: new Date,
    text: "new comment to task 4",
    taskId: 4,
    boardId: 1,
    id: 4
  },
]