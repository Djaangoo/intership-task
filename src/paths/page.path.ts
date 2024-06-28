import { basePath } from './base.path';

export const pagePath = {
  base: '/',
  home: '/home',
  helloWorld: '/hello-world',

  // error url for creating links
  error: (code = 404) => `/error/${code}`,
  // error url for routing
  __error: '/error/:code',
};
