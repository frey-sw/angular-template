import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UiComponentsModule } from '@sw-ui-components';

import { AppCoreModule, IAppFileConfig, PrivateGuard, PublicGuard } from '@app-core';
import { AppRoutingModule } from './app-routing.module';
import { InitComponent } from './init.component';
import { environment } from '../environments/environment';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appConfigServiceConfig: IAppFileConfig = {
  configFile: environment.configFile,
};

@NgModule({
  declarations: [InitComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCoreModule.forRoot(appConfigServiceConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    UiComponentsModule,
  ],
  providers: [PublicGuard, PrivateGuard],
  bootstrap: [InitComponent],
})
export class AppModule {}
