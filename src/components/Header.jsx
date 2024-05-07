import React from "react";

export default function Header(props) {
  const { startGame } = props;

  return (
    <header className="flex flex-col items-center px-5 py-3 gap-4">
      <h1 className="text-4xl text-white font-bold text-center">
        Nithin's Pokédex
      </h1>
      <button
        onClick={startGame}
        className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-yellow-300 rounded-full hover:bg-white group"
      >
        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-300">
          Play the Pokemon Game
        </span>
      </button>
    </header>
  );
}
