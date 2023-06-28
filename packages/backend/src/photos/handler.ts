import serverlessHttp from 'serverless-http';
import {api} from './api';

// use server to handle all routes
export const handler = serverlessHttp(api as any);
