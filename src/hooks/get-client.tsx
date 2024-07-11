import Client from "wsnet-client";
import { useClient } from "wsnet-client-react";

export default function getClient() {
  const [] = useClient(() => {
    return new Client(
      document.location.protocol == "http:" ? "ws://localhost:8080" : ""
    );
  });

  return [];
}
