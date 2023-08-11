import { createContext, useEffect, useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import { PokemonCharacterDetails } from "./components/PokemonCharacterDetails";

export const ShowModalContext = createContext();
export const PokemonDetailsContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    // disable the scrollbar
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [showModal])
  return (
    <main>
      <ShowModalContext.Provider value={{ setShowModal }}>
        <PokemonDetailsContext.Provider
          value={{ pokemonDetails, setPokemonDetails }}
        >
          <MainContainer />
          {showModal && (
            <div className="modal-wrapper">
              <PokemonCharacterDetails />
            </div>
          )}
        </PokemonDetailsContext.Provider>
      </ShowModalContext.Provider>
      <br />
      <br />
    </main>
  );
}

export default App;
