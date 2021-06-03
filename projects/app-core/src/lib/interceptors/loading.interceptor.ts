import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoadingService } from '../services';

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this._loadingService.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(
        catchError(err => {
          this._loadingService.setLoading(false, request.url);
          return err;
        })
      )
      .pipe(
        map(evt => {
          if (evt instanceof HttpResponse) {
            this._loadingService.setLoading(false, request.url);
          }
          return evt;
        })
      );
  }
}
