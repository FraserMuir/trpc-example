import { useGreeting } from './use-greeting';

export function Greeting() {
  const { greeting, setName } = useGreeting();

  return (
    <div className="m-5 p-10">
      <input className="rounded border p-1" onChange={(e) => setName(e.target.value)} />
      <p>{greeting}</p>
    </div>
  );
}
