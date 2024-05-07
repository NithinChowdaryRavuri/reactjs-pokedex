import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Game from "./components/Game";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [game, setGame] = useState(false);
  const [gameData, setGameData] = useState(null);
  const [img, setImg] = useState("imgNoShow");
  const [name, setName] = useState("nameNoShow");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    async function fetchPokemonData() {
      const localKey = "PokemonData";
      if (localStorage.getItem(localKey)) {
        const localData = JSON.parse(localStorage.getItem(localKey));
        setPokemons(localData);
        console.log("Data fetched from local storage");
        return;
      }
      localStorage.clear();
      const check = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      ).then((res) => res.json());
      console.log(check.results);
      localStorage.setItem(localKey, JSON.stringify(check.results));
      setPokemons(check.results);
      console.log("Data fetched from API");
    }
    fetchPokemonData();
  }, []);

  function toggleModal() {
    setModal(!modal);
  }

  useEffect(() => {
    if (modalData) {
      toggleModal();
    }
  }, [modalData]);

  async function backModal(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setModalData(data);
  }

  function toggleGame() {
    setGame(false);
  }

  useEffect(() => {
    if (gameData) {
      setGame(true);
    }
  }, [gameData]);

  function startGame() {
    // I have the pokemons name and index stored in my pokemons state, now I need to randomly select one of them and display it, also simultaneously display 4 options to choose from.
    // I will use the Math.random() method to generate a random number between 0 and 150 (inclusive) and use that number to select a pokemon from the pokemons state.
    // I will then display the selected pokemon's image and name and 4 options to choose from. The correct answer will be the selected pokemon's name.
    const randomIndex = Math.floor(Math.random() * 151);
    const randomPokemon = pokemons[randomIndex];
    const correctAnswer = randomPokemon.name;
    const options = [];
    options.push(correctAnswer);
    while (options.length < 4) {
      const randomIndex = Math.floor(Math.random() * 151);
      const randomPokemon = pokemons[randomIndex].name;
      if (!options.includes(randomPokemon)) {
        options.push(randomPokemon);
      }
    }
    options.sort(() => Math.random() - 0.5);
    setGameData({ correctAnswer, options, randomPokemon, randomIndex });
    setImg("imgNoShow");
    setName("nameNoShow");
    setIsOptionSelected(false);
  }

  function toggleImgName() {
    setImg("imgShow");
    setName("nameShow");
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    toggleImgName();
    setIsOptionSelected(true);
  }

  return game ? (
    <Game
      toggleGame={toggleGame}
      gameData={gameData}
      startGame={startGame}
      img={img}
      name={name}
      handleOptionClick={handleOptionClick}
      selectedOption={selectedOption}
      isOptionSelected={isOptionSelected}
    />
  ) : modal ? (
    <Modal toggleModal={toggleModal} modalData={modalData} />
  ) : (
    <main className="flex flex-col redcol items-center h-screen w-screen gap-4">
      <Header startGame={startGame} />
      {pokemons && <Main pokemons={pokemons} backModal={backModal} />}
      <Footer />
    </main>
  );
}

export default App;
