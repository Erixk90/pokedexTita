import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        name: "",
        favorites: [],
    },
    reducers: {
        getAllPokemons: (state, action) => {
            const pokemon = action.payload;
            return pokemon;
        },

        setPokemonName: (state, action) => {
            state.name = action.payload;
        },
        addFavorite(state, action) {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(
                (pokemon) => pokemon !== action.payload
            );
        },
    },
});

export const { getAllPokemons, setPokemonName,  addFavorite, removeFavorite } = pokemonSlice.actions;


export default pokemonSlice.reducer;
