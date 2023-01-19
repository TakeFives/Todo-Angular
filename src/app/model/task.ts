export interface Task{
  id?: number,
  createdAt: Date,
  name: string,
  status: string,
  boardId: number,
  archived?: boolean,
  comments?: any[],
}