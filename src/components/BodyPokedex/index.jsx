import { useState } from "react";
import { apiPokemon } from "../../services/apiPokemon";
import { useEffect } from "react";
import { PokemonCard } from "../PokemonCard";
import {
  BtnBack,
  DivPokedex,
  DivPokedexCard,
  DivSuperiorPokedex,
  ImgBack,
  TitlePokedex,
} from "./style";
import { LoadGlobal } from "../LoadGlobal/index.jsx";

export const BodyPokedex = () => {
  const [pokemons, setPokemons] = useState([{}]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    apiPokemon.get(`/pokemon/?offset=0&limit=50`).then(async (res) => {
      const results = res.data.results;
      let pokemonArray = await Promise.all(
        results.map(async (e) => apiPokemon.get(e.url).then((res) => res.data))
      );
      setPokemons(pokemonArray);
      setLoad(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoad(false);
    });
  }, []);

  return (
    <>
      {load == true ? (
        <LoadGlobal />
      ) : (
        <DivPokedex>
          <DivSuperiorPokedex>
            <BtnBack>
              <ImgBack />
            </BtnBack>
            <TitlePokedex>Pokedex</TitlePokedex>
          </DivSuperiorPokedex>
          <DivPokedexCard>
            {pokemons &&
              pokemons.map((e) => {
                let type = [];
                if (Array.isArray(e.types)) {
                  for (let i of e.types) {
                    type.push(i.type.name);
                  }
                }
                let img = e.sprites?.other["official-artwork"].front_default;
                return (
                  <PokemonCard
                    key={e.id}
                    id={e.id}
                    nome={e.name}
                    img={img}
                    type={type}
                  />
                );
              })}
          </DivPokedexCard>
        </DivPokedex>
      )}
    </>
  );
};
