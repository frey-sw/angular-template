import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConfigService } from './app-config.service';
import { API_TYPE_ENUM } from '../enums/api-type.enum';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient, private _configService: AppConfigService) {}

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(apiType: string, path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.get(`${this._buildApiUrl(path, apiType)}`, { params }).pipe(catchError(ApiService.formatErrors));
  }

  put(apiType: string, path: string, body: Object = {}): Observable<any> {
    return this._http.put(`${this._buildApiUrl(path, apiType)}`, JSON.stringify(body)).pipe(catchError(ApiService.formatErrors));
  }

  post(apiType: string, path: string, body: Object = {}): Observable<any> {
    return this._http.post(`${this._buildApiUrl(path, apiType)}`, JSON.stringify(body)).pipe(catchError(ApiService.formatErrors));
  }

  delete(apiType: string, path: string): Observable<any> {
    return this._http.delete(`${this._buildApiUrl(path, apiType)}`).pipe(catchError(ApiService.formatErrors));
  }

  private _buildApiUrl(path: string, apiType: string) {
    const apiTypes = Object.values(API_TYPE_ENUM);
    const typeExists = apiTypes.find(element => element === apiType);

    if (!typeExists) {
      throw new Error('Error trying to use non existent API type');
    }
    return (this._configService.envConfig as any)[apiType] + path;
  }
}
