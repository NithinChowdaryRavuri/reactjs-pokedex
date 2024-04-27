import React from "react";
import PokeCard from "./PokeCard";

export default function Main(props) {
  const { pokemons } = props;
  return (
    <section
      className="flex h-5/6 flex-1 flex-wrap items-center justify-center
    bg-white rounded-lg overflow-auto px-8 p-4 gap-4"
    >
      {pokemons.map((pokemon, pokeIndex) => {
        return (
          <PokeCard pokeIndex={pokeIndex} key={pokeIndex}>
            {pokemon}
          </PokeCard>
        );
      })}
    </section>
  );
}
