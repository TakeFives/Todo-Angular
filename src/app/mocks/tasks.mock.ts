import { Task } from "../model/task";

export const tasksMock: Task[] = [
  {
  id: 1,
  createdAt: new Date(1466424490000),
  name: "test 1",
  status: "in progress",
  boardId: 1
  },
  {
  id: 2,
  createdAt: new Date(1566424490000),
  name: "test 2",
  status: "todo",
  boardId: 1
  },
  {
  id: 3,
  createdAt: new Date(1666424490000),
  name: "my new name",
  status: "done",
  boardId: 1
  },
  {
  id: 4,
  createdAt: new Date(1766424490000),
  name: "test 4",
  status: "done",
  boardId: 1
  },

]