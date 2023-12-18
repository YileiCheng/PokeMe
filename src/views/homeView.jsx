import React, { useState, useEffect } from "react";
import { getPokemons } from "../model/pokemonService";
import Banner from "./components/banner";
import PokeItem from "./components/pokeItem";
import PokeIcon from "../assets/images/pokecoin.png";
import PikachuHello from "../assets/images/pikachuhello.gif";
import "/src/style.css";

function HomeView(props) {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getPokemons(12, offset);
      setPokemons(data);
      setOffset(offset+12);
      setLoading(false);
    };

    fetchPokemons();
  }, []);
  
  const nextPage = async () => {
    setLoading(true);
    const data = await getPokemons(12, offset);
    setPokemons(data);
    setOffset(offset+12);
    setLoading(false);
  }
  return (
      <div>
      <Banner text="Pokemon Personality Test" className="banner-text" />
      <div className="center-text">Let's revisit some familiar Pokémon characters!</div>
      <div className="gridContainer">
        {loading?
          <img src={"https://i.gifer.com/XOsX.gif"}></img>
         : pokemons.map((pokemon, index) => (
            <PokeItem
              key={index}
              name={pokemon.name}
              goToPokemonInfo={() => props.goToPokemonInfo(pokemon.name)}
              image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            />
          ))
        }
      </div>
      <div className="container-right">
        <button className="itemButton" onClick={nextPage}>Next Page</button>
      </div>
      <div className="floating-button-div">
        <div className="login-pikachu">
          <img src={PikachuHello} alt="pikachu hello" />
        </div>
        <button className="float-button" onClick={props.goToTest}>
          <img
            src={PokeIcon}
            alt="PokeIcon"
            style={{ maxWidth: "58px", height: "auto" }}
          />
          <div>Test Now!</div>
        </button>
      </div>
    </div>
  );
}

export default HomeView;
