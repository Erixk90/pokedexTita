import React from "react";
import { useSelector } from "react-redux";
import './index.css'


const Favorites = () => {
  const favorites = useSelector((state) => state.pokemon.favorites);

  return (
    <div className="favorites-container">
      <h2 className="title-favorites">Mis favoritos</h2>
      <ul className="ul-data">
        { favorites.length > 0 ? ( favorites.map((pokemon, index) => (
          <li key={index}>
            {pokemon}
          </li>
        ))) : (<><p>Todavia no tienes favoritos, Atrapalos ya</p></>) }
      </ul>
    </div>
  );
};

export default Favorites;
