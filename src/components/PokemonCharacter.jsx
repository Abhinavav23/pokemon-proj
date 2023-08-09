import React, { useEffect, useState } from "react";

export const PokemonCharacter = ({ url }) => {
  const [info, setInfo] = useState({})
  const fetchPokemonInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setInfo(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <section className="pokemon-card">
      <div className="number">#{info.id}</div>
      {/* <div>{info.id}</div> */}
      <img src={info.image} alt={`image of ${info.name}`} />
      <div className="char-name">{info.name}</div>
      <div className="char-type">Type: {info.type}</div>
    </section>
  );
};
