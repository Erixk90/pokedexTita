import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'


const PokemonCard = ({pokemon}) => {
  const [sprite, setSprite] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSprite = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`);
        if (response.ok) {
          setSprite(response.url);
        } else {
          console.error('Failed to fetch sprite:', response.status);
        }
      } catch (error) {
        console.error('Error fetching sprite:', error);
      }
    }

    fetchSprite()
  }, [pokemon.id])

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`)
  };

  return (
    <div className='card-container' key={pokemon.id} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <p className='card-id'>#{pokemon.id}</p>
          {
            sprite ? (
              <img className='card-image' src={sprite} alt={`${pokemon.name} sprite`}/>
            ): <p>Cargando Imagen...</p>
          }
          <h2 className='card-name'>{pokemon.name}</h2>
        </div>
  )
}

export default PokemonCard