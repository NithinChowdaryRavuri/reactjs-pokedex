import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [pokemons, setPokemons] = useState(null);

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

  return (
    <main className="flex flex-col redcol h-screen w-screen gap-4">
      <Header />
      {pokemons && <Main pokemons={pokemons} />}
      <Footer />
    </main>
  );
}

export default App;
