import gql from "graphql-tag";

export const GET_POKEMONS = gql`
    query pokemons {
        pokemon_v2_pokemon(order_by: { name: asc }, limit:150) {
            name
            id
        pokemon_v2_pokemonsprites {
            sprites
    }
    }
}
`;


