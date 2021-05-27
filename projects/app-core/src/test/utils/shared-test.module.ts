import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ApiService, AppConfigService, AuthService, MessagingService, TokenService } from '../../lib/services';
import { AppConfigServiceMock } from '../mocks/app-config.service.mock';

@NgModule({
  declarations: [],
  imports: [RouterTestingModule, HttpClientTestingModule, BrowserTestingModule, ReactiveFormsModule, TranslateModule.forRoot()],
  exports: [RouterTestingModule, HttpClientTestingModule, BrowserTestingModule, ReactiveFormsModule, TranslateModule],
  providers: [
    ApiService,
    AuthService,
    {
      provide: AppConfigService,
      useClass: AppConfigServiceMock,
    },
    TokenService,
    MessagingService,
  ],
})
export class SharedTestModule {}
