// eslint-disable-next-line @typescript-eslint/naming-convention
import { APP_ROUTES } from '@aft-core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PUBLIC_MODULE_ROUTES = {
  LOGIN: '',
  FORGOT_PASSWORD: 'forgot',
  RESET_PASSWORD: 'reset/:token/:email',
};

export const generatePublicModuleRoute = (route: string): Array<string> => {
  if (route?.length) {
    return [route];
  }
  return [];
};

export const generateFullPublicModuleRoute = (route: string): Array<string> => {
  return [...APP_ROUTES.LANDING, ...generatePublicModuleRoute(route)];
};
