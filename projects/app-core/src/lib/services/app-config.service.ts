// Modules
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';

// Interfaces
import { IEnvFileConfig, AppFileConfig, IAppFileConfig } from '../interfaces';

// Environment

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  // Private variables
  private _envFileConfig: IEnvFileConfig;
  private _appConfig: IAppFileConfig;

  // Constructor
  constructor(@Inject(AppFileConfig) private _conf: IAppFileConfig, private _injector: Injector) {
    this._envFileConfig = { apiIdentityUrl: '' };
    this._appConfig = _conf;
  }

  // Getter for Environment File config
  get envConfig(): IEnvFileConfig {
    return this._envFileConfig;
  }

  // Getter for application config
  get appConfig(): IAppFileConfig {
    return this._appConfig;
  }

  // Public method to load the config file
  public async loadAppConfig(): Promise<void> {
    const http = this._injector.get(HttpClient);
    return http
      .get(this._appConfig.configFile)
      .toPromise()
      .then(response => {
        this._envFileConfig = response as IEnvFileConfig;
      });
  }
}
