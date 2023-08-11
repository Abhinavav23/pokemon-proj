import { useEffect, useState } from "react";
import "../App.css";
import { PokemonCharacter } from "./PokemonCharacter";

function MainContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  const fetchPokemonData = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log("data", data[0]);
      // copying values from 2 arrays
      setPokemonList([...pokemonList, ...data[0].results]);
      setNextUrl(data[0].next);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMorePokeMons = () => {
    fetchPokemonData(nextUrl);
  };

  useEffect(() => {
    fetchPokemonData(
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
  }, []);

  return (
    <main>
      <header className="header-container">
        <div className="header-part-1">
          <h2>Pokemon</h2>
          <h2 className="second-h2">Pokemon</h2>
        </div>
        <div className="header-part-2">
          <h2>KingDom</h2>
          <h2>KingDom</h2>
        </div>
      </header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="body-container">
          <section className="card-container">
            {pokemonList &&
              pokemonList.map(({ name, url }, i) => {
                return <PokemonCharacter url={url} key={i} />;
              })}
          </section>
          <button className="load-more" onClick={loadMorePokeMons}>
            More Pokemons
          </button>
        </section>
      )}
    </main>
  );
}

export default MainContainer;
