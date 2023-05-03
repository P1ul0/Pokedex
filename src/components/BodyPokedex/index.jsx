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
import { useNavigate } from "react-router-dom";

export const BodyPokedex = () => {
  const [pokemons, setPokemons] = useState([{}]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

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

  const hadleClickBack = async () => {
    navigate("/Perfil");
  };

  return (
    <>
      {load == true ? (
        <LoadGlobal />
      ) : (
        <DivPokedex>
          <DivSuperiorPokedex>
            <BtnBack onClick={hadleClickBack}>
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
