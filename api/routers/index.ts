import { t } from '..';

export const appRouter = t.router({
  healthcheck: t.procedure.query(() => 'ok'),
});
