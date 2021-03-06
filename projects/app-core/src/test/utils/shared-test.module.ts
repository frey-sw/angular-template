import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { UiComponentsModule } from '@sw-ui-components';

import { ApiService, AppConfigService, AuthService, LoadingService, MessagingService, TokenService } from '../../lib/services';
import { AppConfigServiceMock } from '../mocks/app-config.service.mock';

@NgModule({
  declarations: [],
  imports: [
    RouterTestingModule,
    HttpClientTestingModule,
    BrowserTestingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    UiComponentsModule,
  ],
  exports: [
    RouterTestingModule,
    HttpClientTestingModule,
    BrowserTestingModule,
    ReactiveFormsModule,
    TranslateModule,
    UiComponentsModule,
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: AppConfigService,
      useClass: AppConfigServiceMock,
    },
    TokenService,
    MessagingService,
    LoadingService,
  ],
})
export class SharedTestModule {}
