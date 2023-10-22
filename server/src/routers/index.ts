/**
 * This file contains the root router of your tRPC-backend
 */
import { t } from '../trpc';
import { greetingsRouter } from './greetings';

export const appRouter = t.router({
  healthcheck: t.procedure.query(() => 'ok'),

  greetings: greetingsRouter,
});
