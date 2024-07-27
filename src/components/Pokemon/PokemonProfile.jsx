import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID } from "../../graphql/getPokemonByID";
import PokemonDetail from "../Favorites/PokemonDetail";
import typeColors from "../../utils/typeColors";
import "./index.css";

const PokemonProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id },
  });

  console.log(data, "data?");

  if (loading) return <div>Cargando detalles del Pokémon...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pokemon = data?.pokemon_v2_pokemon_by_pk || [];

  const firstType = pokemon.pokemon_v2_pokemontypes[0]?.pokemon_v2_type.name;
  const backgroundColor = typeColors[firstType] || "#ffffff";

  return (
    <div className="profile-container">
      <PokemonDetail pokemon={pokemon} />
      {pokemon ? (
        <div className="data-container" style={{ backgroundColor }}>
          <div className="container-name">
            <h2 className="profile-name">{pokemon.name}</h2>
            <p className="profile-id">#{pokemon.id}</p>
          </div>
          <img
            className="profile-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={`${pokemon.name} sprite`}
          />
          <div className="statistics-container">
            <div className="type-container">
              <ul className="ul-data">
                {pokemon.pokemon_v2_pokemontypes.map((type, index) => (
                  <li
                    className="type-name"
                    style={{ backgroundColor }}
                    key={index}
                  >
                    {type.pokemon_v2_type.name}
                  </li>
                ))}
              </ul>
            </div>
            <span className="inner-title" style={{ color: backgroundColor }}>
              About
            </span>
            <div className="about-container">
              <p className="weight">
                {pokemon.weight / 10} kg{" "}
                <span className="botton-title">Weight</span>
              </p>
              <p className="height">
                {pokemon.height / 10} m{" "}
                <span className="botton-title">Height</span>
              </p>
              <div className="moves-container">
                <ul className="ul-data">
                  {pokemon.pokemon_v2_pokemonmoves.map((move, index) => (
                    <li key={index}>{move.pokemon_v2_move.name}</li>
                  ))}
                </ul>{" "}
                <span className="botton-title">Moves</span>
              </div>
            </div>

            <div>
              <span className="inner-title" style={{ color: backgroundColor }}>
                Abilities
              </span>
              <ul className="ul-data abilities ">
                {pokemon.pokemon_v2_pokemonabilities.map((ability, index) => (
                  <li className="abilities" key={index}>
                    {ability.pokemon_v2_ability.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="inner-title" style={{ color: backgroundColor }}>
                Base Stats
              </h3>
              <ul className="ul-data stats-list">
                {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
                  <li className="stat-item" key={index}>
                    <span className="stat-name abilities ">
                      {" "}
                      {stat.pokemon_v2_stat.name}: {stat.base_stat}
                    </span>
                    <div className="stat-bar-container">
                      <div
                        className="stat-bar"
                        style={{ width: `${stat.base_stat}%`, backgroundColor }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Pokémon no encontrado</p>
      )}
    </div>
  );
};

export default PokemonProfile;
