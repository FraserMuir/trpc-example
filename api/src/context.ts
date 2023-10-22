import * as trpc from '@trpc/server';
import * as trpcHttp from '@trpc/server/adapters/standalone';

const artificialAuthDelay = () => new Promise((resolve) => setTimeout(resolve, 100));

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (opts?: trpcHttp.CreateHTTPContextOptions) => {
  const req = opts?.req;
  const res = opts?.res;

  // wait for 100ms to simulate authentication
  await artificialAuthDelay();

  // for API-response caching see https://trpc.io/docs/caching
  return { req, res };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
