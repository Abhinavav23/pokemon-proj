import { createContext, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { PokemonCharacterDetails } from "./components/PokemonCharacterDetails";

export const PokeMonContext = createContext();

function App() {
  const [show, setShow] = useState(false)
  return (
    <main>
      <PokeMonContext.Provider value={{setShow}}>
        <MainContainer />
        { show && <PokemonCharacterDetails/>}

      </PokeMonContext.Provider>
      <br /><br />
    </main>
  );
}

export default App;
