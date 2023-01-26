import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route, Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = `/${route.path}`;
    return this.isAuthorized(url);
  }

  private isAuthorized(url: string): boolean {
    if (this.authService.isAuthenticated()) return true;
    this.authService.redirectUrl = url;
    this.router.navigateByUrl('/auth');
    return false;
  }
}
