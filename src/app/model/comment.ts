export interface Comment{
  id?: number,
  createdAt: Date,
  text: string,
  taskId: number,
  boardId: number
}