import serverlessHttp from 'serverless-http';
import { api } from './api';

export const handler = serverlessHttp(api as any);
