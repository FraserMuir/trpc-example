import { useEffect, useState } from 'react';
import { trpc } from 'trpc';

export const useGreeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const { refetch } = trpc.greetings.greetingWithName.useQuery({ name }, { enabled: false });

  useEffect(() => {
    const fetchGreeting = async () => {
      const { data, error, isLoading } = await refetch();
      if (error) return console.error(error);
      if (isLoading) return console.log(isLoading);
      return setGreeting(data);
    };
    void fetchGreeting();
  }, [name, refetch]);

  return {
    setName,
    greeting,
  };
};
