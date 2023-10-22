import { z } from 'zod';

import { t } from '../trpc';

export const greetingsRouter = t.router({
  greeting: t.procedure.query(() => 'hi there'),
  greetingWithName: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => `hey ${input.name}`),
});
