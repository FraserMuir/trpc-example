import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';

import { createContext } from './src/context';
import { appRouter } from './src/routers';

export type AppRouter = typeof appRouter;

// create server
createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext,
}).listen(4000);
