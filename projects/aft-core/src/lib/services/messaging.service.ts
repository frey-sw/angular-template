import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

const defaultDuration = 5000;

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  constructor(private _messageService: MessageService, private _translate: TranslateService) {}

  getTranslation(transKey: string | string[], interpolateParams?: object) {
    return this._translate.instant(transKey, interpolateParams);
  }

  getAsyncTranslation(transKey: string | string[], interpolateParams?: object): Observable<any> {
    return this._translate.get(transKey, interpolateParams);
  }

  info(title = 'GENERAL.TITLES.INFO', message: string, duration = defaultDuration): void {
    this._messageService.add({
      severity: 'info',
      summary: this.getTranslation(title),
      detail: this.getTranslation(message),
      key: 'globalInfoNotification',
      life: duration,
    });
  }

  success(title = 'GENERAL.TITLES.SUCCESS', message: string, duration = defaultDuration): void {
    this._messageService.add({
      severity: 'success',
      summary: this.getTranslation(title),
      detail: this.getTranslation(message),
      key: 'globalSuccessNotification',
      life: duration,
    });
  }

  warning(title = 'GENERAL.TITLES.WARNING', message: string, duration = defaultDuration): void {
    this._messageService.add({
      severity: 'warn',
      summary: this.getTranslation(title),
      detail: this.getTranslation(message),
      key: 'globalWarningNotification',
      life: duration,
    });
  }

  error(title = 'GENERAL.TITLES.ERROR', message: string, duration = defaultDuration): void {
    this._messageService.add({
      severity: 'error',
      summary: this.getTranslation(title),
      detail: this.getTranslation(message),
      key: 'globalErrorNotification',
      life: duration,
    });
  }
}
