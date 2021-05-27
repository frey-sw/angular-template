import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services';

@Injectable()
export class PublicGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<any> | Promise<any> | boolean | UrlTree {
    return this.authService.isLoggedIn.pipe(
      take(1),
      map(isAuth => {
        if (!isAuth) {
          return true;
        }
        return this.router.createUrlTree(['private']);
      })
    );
  }
}
