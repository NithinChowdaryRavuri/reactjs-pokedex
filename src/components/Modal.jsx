import React from "react";

export default function Modal(props) {
  const { toggleModal, modalData } = props;
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    dark: "#EE99AC",
  };
  const bg_col = typeColors[modalData.types[0].type.name];

  return (
    <main
      className="flex items-center justify-center h-screen overflow-y-auto"
      style={{ backgroundColor: bg_col }}
    >
      <div className="w-4/5 h-full text-center z-[5]">
        <div className="flex items-center justify-between p-4 px-12 md:px-24">
          <button onClick={toggleModal} className="text-lg sm:text-2xl">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="text-lg sm:text-2xl">
            <h1>{modalData.name}</h1>
            <h2>#{modalData.id}</h2>
          </div>
        </div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${modalData.id}.svg`}
            alt="pokemon"
            className="w-44 h-44 sm:w-60 sm:h-60 mx-auto"
          />
        </div>
        <div className="flex flex-col bg-white rounded-lg justify-around mt-4 gap-8 m-2">
          <div className="flex flex-col text-center m-2 p-2 gap-4">
            <h3>About</h3>
            <p>
              <i className="fa-solid fa-up-down"></i> Height: {modalData.height}
              0 CM
            </p>
            <p>
              <i className="fa-solid fa-weight-scale"></i> Weight:{" "}
              {modalData.weight}0 Grams
            </p>
          </div>
          <div className="flex flex-col text-center m-2 p-2 gap-4">
            <h3>Base Stats</h3>
            <p>
              <i className="fa-solid fa-heart"></i> HP:{" "}
              {modalData.stats[0].base_stat}
            </p>
            <p>
              <i className="fa-solid fa-gun"></i> Attack:{" "}
              {modalData.stats[1].base_stat}
            </p>
            <p>
              <i className="fa-solid fa-shield"></i> Defense:{" "}
              {modalData.stats[2].base_stat}
            </p>
            <p>Special Attack: {modalData.stats[3].base_stat}</p>
            <p>Special Defense: {modalData.stats[4].base_stat}</p>
            <p>
              <i className="fa-solid fa-person-running"></i> Speed:{" "}
              {modalData.stats[5].base_stat}
            </p>
          </div>
        </div>
      </div>
      <img
        className="absolute top-4 right-4 z-[2] opacity-30"
        src="/pokedex.svg"
        alt="PokeBall"
      />
    </main>
  );
}
