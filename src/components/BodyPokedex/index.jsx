
import { useState } from "react"
import { apiPokemon } from "../../services/apiPokemon"
import { useEffect } from "react"
import { PokemonCard } from "../PokemonCard"


export const BodyPokedex = () => {
    const [pokemons, setPokemons] = useState([{}])

    useEffect(() => {

            apiPokemon.get(`/pokemon/?offset=0&limit=50`).then(async (res) => {
              const results = res.data.results;
              let pokemonArray = await Promise.all(
                results.map(async (e) =>
                  apiPokemon.get(e.url).then((res) => res.data)
                )
              );
              setPokemons(pokemonArray);
            });
             
    },[])
    
    return (
      <>
      {pokemons && pokemons.map((e) => {
           let type = [];
           if (Array.isArray(e.types)) {
             for (let i of e.types) {
               type.push(i.type.name);
             }
           }
        let img = e.sprites?.other['official-artwork'].front_default
        return(
          <PokemonCard
        id={e.id}
        nome={e.name}
        img={img}
        type={type}
        />
        )
      })}
      
        </>
        
      
    )
   
}