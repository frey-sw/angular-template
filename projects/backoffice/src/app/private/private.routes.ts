// eslint-disable-next-line @typescript-eslint/naming-convention
import { APP_ROUTES } from '@app-core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PRIVATE_MODULE_ROUTES = {
  HOME: '',
  PROFILE: 'profile',
};

export const generatePrivateModuleRoute = (route: string): Array<string> => {
  if (route?.length) {
    return [route];
  }
  return [];
};

export const generateFullPrivateModuleRoute = (route: string): Array<string> => {
  return [...APP_ROUTES.PRIVATE, ...generatePrivateModuleRoute(route)];
};
