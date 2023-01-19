import { BoardService } from "./board.service";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { tasksMock } from "../mocks/tasks.mock";
import { boardsMock } from "../mocks/boards.mock";
import { environment } from "src/environments/environment";

describe('BoardService (using TestBed)', () => {
  let service: BoardService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const url = environment.url

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BoardService,
        HttpClient
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(BoardService)
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  describe('get boards', () => {
    const getBoardsUrl = url + 'boards'

    it('should return all boards (called ones)', () => {
      service.getBoards().subscribe({
        next: boards => expect(boards).toEqual(boardsMock),
        error: fail
      })

      const req = httpTestingController.expectOne(getBoardsUrl)
      expect(req.request.method).toEqual('GET')

      req.flush(boardsMock);
    })
    it('should return board by id (called ones)', () => {
      const board = boardsMock[2]
      const getBoardByIdUrl = getBoardsUrl + `/${board.id}`


      service.getBoardById(board.id).subscribe({
        next: board => expect(board).toEqual(boardsMock[2]),
        error: fail
      })

      const req = httpTestingController.expectOne(getBoardByIdUrl)
      expect(req.request.method).toEqual('GET')

      req.flush(boardsMock[2]);
    })
  })

  describe('create board', () => {
    const createBoardsUrl = url + 'boards'
    const board = boardsMock[0]

    it('should return new board (called ones)', () => {
      service.createBoard(board).subscribe({
        next: board => expect(board).toEqual(boardsMock[0]),
        error: fail
      })

      const req = httpTestingController.expectOne(createBoardsUrl)
      expect(req.request.method).toEqual('POST')

      req.flush(boardsMock[0]);
    })
  })

  describe('edit board', () => {
    const board = boardsMock[0]
    const getBoardsUrl = url + `boards/${board.id}`
    const newName = 'test 1 description'

    it('should return edit board (called ones)', () => {
      service.editBoard(board.id!, newName).subscribe({
        next: board => expect(board).toBeTruthy(),
        error: fail
      })

      const req = httpTestingController.expectOne(getBoardsUrl)
      expect(req.request.method).toEqual('PATCH')
      expect(req.request.body.name).toEqual(newName)

      req.flush(boardsMock[0]);
    })
  })

  describe('delete board', () => {
    const board = boardsMock[1]
    const getBoardsUrl = url + `boards/${board.id}`

    it('should return edit board (called ones)', () => {
      service.deleteBoard(board).subscribe({
        next: board => expect(board).toBeTruthy(),
        error: fail
      })

      const req = httpTestingController.expectOne(getBoardsUrl)
      expect(req.request.method).toEqual('DELETE')

      req.flush(boardsMock[1]);
    })
  })

})

