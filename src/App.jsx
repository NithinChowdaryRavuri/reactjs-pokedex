import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from "./components/Modal";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);

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
    await setModalData(data);
  }

  return modal ? (
    <Modal toggleModal={toggleModal} modalData={modalData} />
  ) : (
    <main className="flex flex-col redcol items-center h-screen w-screen gap-4">
      <Header />
      {pokemons && <Main pokemons={pokemons} backModal={backModal} />}
      <Footer />
    </main>
  );
}

export default App;
