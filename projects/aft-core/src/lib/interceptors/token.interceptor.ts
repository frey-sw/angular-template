import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._tokenService.getToken();

    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Token ${token}`,
    };

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
