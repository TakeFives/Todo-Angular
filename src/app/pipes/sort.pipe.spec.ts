import { SortPipe } from './sort.pipe';
import { tasksMock } from '../mocks/tasks.mock';
import { boardsMock } from '../mocks/boards.mock';

describe('sort pipe for any arr', () => {

  it('create an instance', () => {
    const pipe = new SortPipe()
    expect(pipe).toBeTruthy()
  })

  describe('sort boards by', () => {
    let pipe: SortPipe;

    beforeEach(() => {
      pipe = new SortPipe();
    })

    it('should return boards sorted by name asc', () => {
      const querySelect = 'name';
      const queryOrder = 'asc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })
    it('should return boards sorted by name desc', () => {
      const querySelect = 'name';
      const queryOrder = 'desc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual([boardsMock[2],boardsMock[1],boardsMock[0]])
    })
    it('should return boards sorted by date asc', () => {
      const querySelect = 'createdAt';
      const queryOrder = 'asc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })
    it('should return boards sorted by date desc', () => {
      const querySelect = 'createdAt';
      const queryOrder = 'desc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual([boardsMock[2],boardsMock[1],boardsMock[0]])
    })
    
    it('should return original array if no sort key provided', () => {
      const querySelect = '';
      const queryOrder = 'desc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })
    it('should return original array if no sort order provided', () => {
      const querySelect = 'name';
      const queryOrder = '';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })

  })
  describe('sort tasks by', () => {
    let pipe: SortPipe;

    beforeEach(() => {
      pipe = new SortPipe();
    })

    it('should return tasks sorted by name asc', () => {
      const querySelect = 'name';
      const queryOrder = 'asc';
      expect(pipe.transform(tasksMock, [querySelect, queryOrder])).toEqual([tasksMock[2],tasksMock[0],tasksMock[1],tasksMock[3]])
    })
    it('should return boards sorted by name desc', () => {
      const querySelect = 'name';
      const queryOrder = 'desc';
      expect(pipe.transform(tasksMock, [querySelect, queryOrder])).toEqual([tasksMock[3],tasksMock[1],tasksMock[0],tasksMock[2]])
    })
    it('should return boards sorted by date asc', () => {
      const querySelect = 'createdAt';
      const queryOrder = 'asc';
      expect(pipe.transform(tasksMock, [querySelect, queryOrder])).toEqual(tasksMock)
    })
    it('should return boards sorted by date desc', () => {
      const querySelect = 'createdAt';
      const queryOrder = 'desc';
      expect(pipe.transform(tasksMock, [querySelect, queryOrder])).toEqual([tasksMock[3],tasksMock[2],tasksMock[1],tasksMock[0]])
    })
    
    it('should return original array if no sort key provided', () => {
      const querySelect = '';
      const queryOrder = 'desc';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })
    it('should return original array if no sort order provided', () => {
      const querySelect = 'name';
      const queryOrder = '';
      expect(pipe.transform(boardsMock, [querySelect, queryOrder])).toEqual(boardsMock)
    })

  })

  
})