import { Injectable } from "@angular/core";
import { boardsMock } from "./boards.mock";
import { Board } from "../model/board";
import { of } from "rxjs/internal/observable/of";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BoardServiceMock {

  getBoards(): Observable<Board[]> {
    return of(boardsMock)
  }
  createBoard(board: Board): Observable<Board> {
    return of(boardsMock[0])
  }

  editBoard(id: number, name: string): Observable<Board> {
    return of(boardsMock[0])
  }

  deleteBoard(board: Board): Observable<Board> {
    return of(boardsMock[0])
  }

  getBoardById(id: number | undefined) {
    return of(boardsMock[0])
  }


}