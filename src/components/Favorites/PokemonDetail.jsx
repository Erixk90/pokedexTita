import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/pokemonSlice";
import favorite from '../../assets/favorite.svg'
import unfavorite from '../../assets/unfavorite.svg'
import './index.css'

const PokemonDetail = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.pokemon.favorites);
  const isFavorite = favorites.includes(pokemon.name);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(pokemon.name));
    } else {
      dispatch(addFavorite(pokemon.name));
    }
  };

  return (
    <div>
            <button className="buttons-favorites" onClick={handleFavoriteClick}>
        {isFavorite ? (
          <img className="unfavorite" src={unfavorite} alt="Unfavorite" />
        ) : ( <img className="favorite"  src={favorite} alt="favorite"/>)}
      </button>

    </div>
  );
};

export default PokemonDetail;
