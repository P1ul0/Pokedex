import { DivPokedex, DivPokedexCard } from "./style";
import { HeaderPokedex } from "../../components/HeaderPokedex/index.jsx"
import { LoadGlobal } from "../../components/LoadGlobal/index.jsx"
import { apiPokemon } from "../../services/apiPokemon";
import { useState } from "react";
import { useEffect } from "react";
import { PokemonCard } from "../../components/PokemonCard/index.jsx";

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([{}]);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    apiPokemon.get(`/pokemon/?offset=0&limit=50`).then(async (res) => {
      const results = res.data.results;
      let pokemonArray = await Promise.all(
        results.map(async (e) => apiPokemon.get(e.url).then((res) => res.data))
      );
      setPokemons(pokemonArray);

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
          <HeaderPokedex Title="Pokedex" />
          <DivPokedexCard>
            {pokemons &&
              pokemons.map((e) => {
                let img = e.sprites?.other["official-artwork"].front_default;
                const pokemon = {
                  id: e.id,
                  nome: e.name,
                  img: img,
                  type: [],
                  stats: [],
                };
                if (Array.isArray(e.types)) {
                  for (let i of e.types) {
                    pokemon.type.push(i.type.name);
                  }
                }
                if (Array.isArray(e.stats)) {
                  for (let i of e.stats) {
                    pokemon.stats.push({
                      base: i.base_stat,
                      name_stat: i.stat.name,
                    });
                  }
                }
                return <PokemonCard key={e.id} Pokemon={pokemon} />;
              })}
          </DivPokedexCard>
        </DivPokedex>
      )}
    </>
  );
};
