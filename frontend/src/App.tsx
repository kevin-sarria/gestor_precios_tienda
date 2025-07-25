import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router";

const App = () => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  )
}

export default App;