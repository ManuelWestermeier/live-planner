import getClient from "./hooks/get-client"

function App() {
  const [client] = getClient()
}

export default App