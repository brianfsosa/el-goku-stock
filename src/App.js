import { Heading, Box } from "@chakra-ui/react";
import { React } from "react";
import Estante from "./components/estantes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Box p="20px">
        <Heading as="h1" size="xl">
          El Goku
        </Heading>

        <Estante></Estante>
      </Box>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
