import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../../graphql/getPokemons'
import './index.css'
import PokemonCard from './PokemonCard'


const GetPokemons = ({search}) => {

  const { data, loading, error } = useQuery(GET_POKEMONS);


  if (loading) return <div>Cargando Los pokemons...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pokemons = data?.pokemon_v2_pokemon || []

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='list-container'>
      {filteredPokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon}  key={pokemon.id} />
      ))}
    </div>
  );
}





export default GetPokemons