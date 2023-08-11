import React, { useContext } from "react";
import { PokemonDetailsContext, ShowModalContext } from "../App";

export const PokemonCharacterDetails = (props) => {
  const { setShowModal } = useContext(ShowModalContext);
  const {
    pokemonDetails: { image, name, weight, height, stats, type },
  } = useContext(PokemonDetailsContext);

  console.log("stats", stats);

  return (
    <aside className={`modal-container ${type}`}>
      <section className="pokemon-info-container">
        <div className="column-1">
          <img src={image} alt={`image of ${name}`} />
          <h3>{name}</h3>
        </div>
        <div className="column-2">
          <p>weight: {weight}</p>
          <p>Height: {height}</p>
        </div>
        <section className={`stat-container ${type}-button`}>
          <div className="column-3">
            {stats.map(({ stat }, i) => {
              return <p>{`stat-${i + 1}: ${stat.name}`}</p>;
            })}
          </div>
          <div className="column-4">
            {stats.map(({ base_stat }, i) => {
              return <p>{`BS-${i + 1}: ${base_stat}`}</p>;
            })}
          </div>
        </section>
      </section>

      <button
        className={`close-modal ${type}-button`}
        onClick={() => setShowModal(false)}
      >
        x
      </button>
    </aside>
  );
};
