import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UiComponentsModule } from '@sw-ui-components';

import { AppConfigService, ApiService, AuthService, TokenService } from './services';
import { AppFileConfig, IAppFileConfig } from './interfaces';
import { TokenInterceptor } from './interceptors';

// Initialize Config service
export function initializeConfigService(appConfigService: AppConfigService) {
  return (): Promise<any> => {
    return appConfigService.loadAppConfig();
  };
}

@NgModule({
  declarations: [],
  imports: [HttpClientModule, TranslateModule, UiComponentsModule],
  exports: [HttpClientModule, CommonModule, TranslateModule],
  providers: [AuthService, TokenService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
})
export class AftCoreModule {
  static forRoot(appConfig: IAppFileConfig): ModuleWithProviders<any> {
    return {
      ngModule: AftCoreModule,
      providers: [
        AppConfigService,
        {
          provide: AppFileConfig,
          useValue: appConfig,
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializeConfigService,
          deps: [AppConfigService],
          multi: true,
        },
        ApiService,
      ],
    };
  }
}
