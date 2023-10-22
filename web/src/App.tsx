import { QueryClientProvider } from '@tanstack/react-query';

import { Greeting } from './greeting/Greeting';
import { queryClient, trpc, trpcClient } from './trpc';

export function App() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Greeting />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
