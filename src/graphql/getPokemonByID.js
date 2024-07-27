import gql from "graphql-tag";

export const GET_POKEMON_BY_ID = gql`
  query getPokemonById($id: Int!) {
    pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes (limit:1) {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonmoves (limit:2) {
        pokemon_v2_move {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      
    }
  }

`;
