import React, { useState } from "react";

export default function Game(props) {
  const {
    toggleGame,
    gameData,
    startGame,
    img,
    name,
    handleOptionClick,
    selectedOption,
    isOptionSelected,
  } = props;

  return (
    <main
      className="flex h-screen flex-1 flex-col items-center justify-center redcol
    bg-white overflow-auto px-8 p-4 gap-4"
    >
      <header className="flex items-center p-5 text-white gap-8">
        <button onClick={toggleGame} className="text-2xl sm:text-3xl">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Who's that Pokemon?
        </h1>
        <button onClick={startGame} className="text-2xl sm:text-3xl">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </header>
      <section className="flex flex-1 flex-col bg-white wide rounded-lg items-center justify-center">
        <img
          className={`w-44 h-44 sm:w-60 sm:h-60 flex-1 p-2 ${img}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            gameData.randomIndex + 1
          }.svg`}
          alt="Pokemon"
        />
        <h2 className={`text-lg md:text-xl font-bold text-center ${name}`}>
          It's {gameData.correctAnswer}
        </h2>
        {/* Now that I have my game data with options, I need to dynamically build the options using them, and once a user selects an option, 
        I need to change the background color of the correct option to green and rest to red, also I need to change the img and name to show */}
        <div className="flex flex-1 flex-col sm:flex-row gap-4 sm:gap-8 p-4 w-full justify-center items-center">
          {gameData.options.map((option, index) => (
            <button
              onClick={() => handleOptionClick(option)}
              key={index}
              disabled={isOptionSelected}
              className={`${
                isOptionSelected && selectedOption === option
                  ? option === gameData.correctAnswer
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-red-500 text-white border-red-500"
                  : "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold"
              } py-2 px-4 border border-blue-500 hover:border-transparent rounded w-32 h-10 text-center hover:text-white`}
            >
              {option}
            </button>
          ))}
        </div>
      </section>
      <footer className="flex items-center justify-center p-4">
        <p className="text-center text-white text-sm">
          &copy; 2024 Nithin 💛. All rights reserved. Pokemon and Pokemon
          character names are trademarks of Nintendo.
        </p>
      </footer>
    </main>
  );
}
