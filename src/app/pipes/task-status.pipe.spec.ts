import { TaskStatusPipe } from './task-status.pipe';
import { tasksMock } from '../mocks/tasks.mock';

describe('task status filter pipe', () => {

  it('create an instance', () => {
    const pipe = new TaskStatusPipe()
    expect(pipe).toBeTruthy()
  })

  describe('filter by task status', () => {
    let pipe: TaskStatusPipe;

    beforeEach(() => {
      pipe = new TaskStatusPipe();
    })

    it('should return tasks with status equal to `done`', () => {
      const query = 'done';
      expect(pipe.transform(tasksMock, query)).toEqual([tasksMock[2], tasksMock[3]])
    })
    it('should return empty array ', () => {
      const query = 'rewr';
      expect(pipe.transform(tasksMock, query)).toEqual([])
    })
    it('should return original array in case if no query', () => {
      const query = '';
      expect(pipe.transform(tasksMock, query)).toEqual(tasksMock)
    })
  })
})