import { useGreeting } from './use-greeting';

export function Greeting() {
  const { greeting, setName } = useGreeting();

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{greeting}</p>
    </div>
  );
}
