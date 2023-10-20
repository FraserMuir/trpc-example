import { trpc } from "trpc";

export function Home() {
  const { data } = trpc.greeting.useQuery();
  
  return (
    <div>
      <h1>Home</h1>
      {data}
    </div>
  )
}