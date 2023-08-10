import React, { useContext, useEffect, useState } from "react";
import { PokeMonContext } from "../App";

export const PokemonCharacter = ({ url }) => {
  const { setShow } = useContext(PokeMonContext);
  const [info, setInfo] = useState({});
  const fetchPokemonInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setInfo(data[0]);
      console.log(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <section className={`pokemon-card ${info.type}`}>
      <div className="number">#{info.id}</div>
      <img src={info.image} alt={`image of ${info.name}`} />
      <div className="char-name">{info.name}</div>
      <div className="char-type">Type: {info.type}</div>
      <button
        className={`know-more ${info.type}-button`}
        onClick={() => setShow(true)}
      >
        Know more...
      </button>

      <button
        className={`know-more ${info.type}-button`}
        onClick={() => setShow(false)}
      >
        hide...
      </button>
    </section>
  );
};
