import { useEffect, useState } from "react";
import { apiPokemon } from "../../services/apiPokemon";
import { LoadGlobal } from "../../components/LoadGlobal";
import { HeaderPokedex } from "../../components/HeaderPokedex";
import { DivFavorito,DivFavoritoCard } from "./style";
import { PokemonCard} from "../../components/PokemonCard/index.jsx"

export const Favoritos = () => {
  const [pokemons, setPokemons] = useState([{}]);
  const [load, setLoad] = useState(false);
  const user = JSON.parse(localStorage.getItem("usuário"));

  useEffect(() => {
    setLoad(true);
    const fetchFavorites = async () => {
      const favoritesArray = await Promise.all(
        user.favorito.map(async (e) => {
          const response = await apiPokemon.get(`pokemon/${e}`);
          return response.data;
        })
      );
      setPokemons(favoritesArray);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
    };
    fetchFavorites();
    setLoad(false);
  }, [user.favorito]);

  return (
    <>
      {load == true ? (
        <LoadGlobal />
      ) : (
        <DivFavorito>
          <HeaderPokedex Title="Favoritos" />
          <DivFavoritoCard>
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
          </DivFavoritoCard>
        </DivFavorito>
      )}
    </>
  );
};
