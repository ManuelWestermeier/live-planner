import useClientContext from "../../hooks/use-client-context";

export default function HomePage() {
  const client = useClientContext();

  return <div onClick={() => client?.close()}>HomePage</div>;
}