import { useEffect, useState } from 'react';
import { trpc } from 'trpc';

export function App() {
  const [name, setName] = useState('');
  const { data, refetch } = trpc.greetings.greetingWithName.useQuery({ name }, { enabled: false });

  useEffect(() => {
    void refetch();
  }, [name, refetch]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{data?.toLocaleLowerCase()}</p>
    </div>
  );
}
