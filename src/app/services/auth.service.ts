import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { ErrorService } from './error.service';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  redirectUrl: string = '';


  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  get token() {
    return localStorage.getItem('token')
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'auth/login', user)
      .pipe(
        tap((res) => {
          this.setToken(res)
          this.setUsername(user.username)
        }),
        catchError(this.errorHandler.bind(this))
      )
  }

  logout(){
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(res: any) { 
    if(res){
      localStorage.setItem('token', res.token)
    } else {
      localStorage.clear()
    }
  }
  private setUsername(username?: string) { 
    if(username){
      localStorage.setItem('username', username)
    } else {
      localStorage.clear()
    }
  }

  private errorHandler(error: HttpErrorResponse) { 
    this.errorService.handle(error.error.message)
    return throwError(() => error.error.message)
  }
}