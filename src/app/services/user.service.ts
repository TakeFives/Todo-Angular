import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { ErrorService } from './error.service';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.url;
  user!: User;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + 'auth/registration', user)
      .pipe(
        tap((res)=>console.log(res)),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.message)
    return throwError(() => error.error.message)
  }
}