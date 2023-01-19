import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { Task } from '../model/task';
import { Comment } from '../model/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = environment.url
  
  tasks: Task[] = []
  allTasks: Task[] = []

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + 'tasks')
      .pipe(
        tap(tasks => this.allTasks = tasks),
        catchError(this.errorHandler.bind(this))
      )
  }

  getTasks(id?: number): Observable<Task[]> {
    return this.http.get<Task[]>(this.url +'board/' + id + '/tasks')
      .pipe(
        tap(tasks => this.tasks = tasks),
        catchError(this.errorHandler.bind(this))
      )
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url + 'tasks', task)
      .pipe(
        tap(task => this.tasks = [...this.tasks, task]),
        catchError(this.errorHandler.bind(this))
      )
  }

  editTaskStatus(id: number, status: string): Observable<Task> {
    return this.http.patch<Task>(this.url +'tasks/' + id, { status: status })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }
  editTaskName(name: string, id?: number): Observable<Task> {
    return this.http.patch<Task>(this.url +'tasks/' + id, { name })
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<void>(this.url +'tasks/' + task.id)
      .pipe(
        map(() => task),
        catchError(this.errorHandler.bind(this))
      )
  }

  archiveTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(this.url +'tasks/' + task.id, { archived: true })
      .pipe(
        map(() => task),
        catchError(this.errorHandler.bind(this))
      )
  }

  // comments

  getComments(id?: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url +'tasks/' + id + '/comments')
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  commentTask(id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url + 'comments', comment)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }
  deleteComment(comment: Comment): Observable<Comment> {
    return this.http.delete<void>(this.url + 'comments/' + comment.id)
      .pipe(
        map(() => comment),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
