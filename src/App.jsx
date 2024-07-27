import React from "react";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import PokemonProfile from "./components/Pokemon/PokemonProfile";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import "./App.css";
import pokedex from './assets/pokedex.svg'

const App = () => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <nav className="navbar">
            <h1><Link className="title-app" to="/">{<img src={pokedex}/>}{'  '}Pokedex</Link></h1>
            <Link className="navbar-links" to="/favorites">Favoritos</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/pokemon/:id" element={<PokemonProfile />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
