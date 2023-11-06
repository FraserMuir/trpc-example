import { renderHook, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { useGreeting } from './use-greeting';

test('useGreeting', async () => {
  const { result } = renderHook(() => useGreeting());

  vi.mock('trpc', () => ({
    trpc: {
      greetings: {
        greetingWithName: {
          useQuery: () => ({
            refetch: () => ({
              data: 'Hello, World!',
              error: null,
              isLoading: false,
            }),
          }),
        },
      },
    },
  }));

  result.current.setName('World');

  await waitFor(() => expect(result.current.greeting).toBe('Hello, World!'));
});
