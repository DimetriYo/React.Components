import { setupServer } from 'msw/node';
import { handlers } from './mockRequestHandlers';

export const server = setupServer(...handlers);
