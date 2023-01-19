// import {Task} from './task'

export interface Board {
  id?: number,
  name: string,
  description: string,
  createdAt: Date,
  tasks?: any [],
}
