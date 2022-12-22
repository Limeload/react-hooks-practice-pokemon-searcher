import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [isSearch, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then((data) => setPokemonArray(data));
  }, []);

  let filterSearch = pokemonArray.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(isSearch.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonArray={pokemonArray} setPokemonArray={setPokemonArray} />
      <br />
      <Search setSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemonArray = {filterSearch}/>
    </Container>
  );
}

export default PokemonPage;
