import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import superjson from 'superjson';

import { createContext } from './context';
import { appRouter } from './routers';

export const t = initTRPC.create({
  transformer: superjson,
});

export type AppRouter = typeof appRouter;

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext,
}).listen(4000);
