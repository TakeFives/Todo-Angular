import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Board } from '../model/board';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  url = environment.url

  filterValue?: string;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.url + 'boards')
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.url +'boards', board)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  editBoard(id: number, name: string): Observable<Board> {
    return this.http.patch<Board>(this.url +`boards/${id}`, { name })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  deleteBoard(board: Board): Observable<Board> {
    return this.http.delete<void>(this.url + 'boards/' + board.id)
      .pipe(
        map(() => board),
        catchError(this.errorHandler.bind(this))
      )
  }

  getBoardById(id: number | undefined) {
    return this.http.get<Board>(this.url + 'boards/' + id)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

}
