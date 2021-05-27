// Interface for the config object
import { InjectionToken } from '@angular/core';

// System interfaces
export interface IAppFileConfig {
  configFile: string;
}

export interface IEnvFileConfig {
  apiIdentityUrl: string;
}

// Injection token for the application
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppFileConfig = new InjectionToken<IAppFileConfig>('AppConfigServiceInjector');
