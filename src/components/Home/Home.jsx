import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import GetPokemons from "./GetPokemons";
import { useNavigate } from "react-router-dom";
import { setPokemonName } from "../../store/slices/pokemonSlice";
import { validatePokemonName } from "../../utils/utils";
import searchsvg from "../../assets/search.svg";
import "./index.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePokemonName(search)) {
      dispatch(setPokemonName(search));
      setError("");
      navigate(`/pokemon/${search}`);
    } else {
      setError("Nombre inválido");
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder={`  Busca un Pokemon`}
        />
        <button className="searchsvg" type="submit">{<img src={searchsvg}/>}</button>
      </form>
      {error && <p style={{ color: "white", }}>{error}</p>}
      <GetPokemons search={search} />
    </div>
  );
};

export default Home;
