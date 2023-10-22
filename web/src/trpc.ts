import { QueryClient } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import SuperJSON from 'superjson';

import { AppRouter } from '../../server';

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();
export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api',
    }),
  ],
  transformer: SuperJSON,
});
