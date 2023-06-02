import { FilterPipe } from './filter.pipe';
import { tasksMock } from '../mocks/tasks.mock';
import { boardsMock } from '../mocks/boards.mock';

describe('filter pipe', () => {

  it('create an instance', () => {
    const pipe = new FilterPipe()
    expect(pipe).toBeTruthy()
  })

  describe('filter boards by board name', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
      pipe = new FilterPipe();
    })

    it('should return item which contains `-2`', () => {
      const query = '-2';
      expect(pipe.transform(boardsMock, query)).toEqual([boardsMock[1]])
    })
    it('should return empty array', () => {
      const query = 'rewr';
      expect(pipe.transform(boardsMock, query)).toEqual([])
    })
    it('should return original array in case if no query', () => {
      const query = '';
      expect(pipe.transform(boardsMock, query)).toEqual(boardsMock)
    })
  })

  describe('filter tasks by task name', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
      pipe = new FilterPipe();
    })

    it('should return item which contains `new`', () => {
      const query = 'new';
      expect(pipe.transform(tasksMock, query)).toEqual([tasksMock[2]])
    })
    it('should return empty array', () => {
      const query = 'rewr';
      expect(pipe.transform(tasksMock, query)).toEqual([])
    })
    it('should return original array in case if no query', () => {
      const query = '';
      expect(pipe.transform(tasksMock, query)).toEqual(tasksMock)
    })
  })
})