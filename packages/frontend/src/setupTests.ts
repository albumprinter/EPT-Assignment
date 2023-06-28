import fetch, {Request, Response} from 'cross-fetch';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

Object.assign(process.env, {
  REACT_APP_PROXY: 'http://localhost:9999',
});
