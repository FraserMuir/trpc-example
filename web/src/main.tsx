import { QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';
import { queryClient, trpc, trpcClient } from './trpc';

export function Main() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
