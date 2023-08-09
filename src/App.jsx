import { useEffect, useState } from "react";
import "./App.css";
import { PokemonCharacter } from "./components/PokemonCharacter";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState({})

  const fetchPokemonData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
      );
      const data = await res.json();
      console.log("data", data[0]);
      setPokemonList(data[0]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <main>
      <header className="header-container">
        <h2>Pokemon</h2>
        <h2>KingDom</h2>
      </header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="card-container">
          {pokemonList.results && pokemonList.results.map(({name, url}, i) => {
            return <PokemonCharacter url={url} key={i}/>
          })}
        </section>
      )}
    </main>
  );
}

export default App;
