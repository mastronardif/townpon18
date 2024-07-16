// src/config.ts
export const config = {
  production: false, // Set this to true in production build
  apiUrl: 'http://localhost:3000/api',
  apiEndpoint: 'http://localhost:3000/town',
  proxy: 'https://www.joeschedule.com/cgi-bin/cgi/ngfop/api_caller.py?url=${url}',
  someOtherVar: 'devValue'
};
