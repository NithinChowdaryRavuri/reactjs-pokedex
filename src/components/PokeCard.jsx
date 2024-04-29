import React from "react";

export default function PokeCard(props) {
  const { children, pokeIndex, backModal } = props;
  return (
    <div
      onClick={() => {
        backModal(pokeIndex + 1);
      }}
      className="flex flex-col border-2 border-slate-100 p-2 items-center rounded-lg gap-2 w-36 h-36 cursor-pointer hover:bg-slate-200"
    >
      <p className="text-xs">#{pokeIndex + 1}</p>
      <img
        className="w-16 h-16"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          pokeIndex + 1
        }.svg`}
        alt="Pokemon"
      />
      <h2 className="text-xs">{children.name}</h2>
    </div>
  );
}
