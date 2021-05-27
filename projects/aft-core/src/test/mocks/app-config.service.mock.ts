import { IEnvFileConfig } from '@aft-core';

export const fakeEndpointUrls = {
  apiIdentityUrl: 'http://fakeUrl/',
};
export class AppConfigServiceMock {
  get envConfig(): IEnvFileConfig {
    return {
      apiIdentityUrl: fakeEndpointUrls.apiIdentityUrl,
    };
  }
}
