import { fetchAllPokemons } from '../api/fetchAllPokemons';
import { fetchTotalPokemonCount } from '../api/fetchTotalPokemonCount';

export async function getPokemons() {
  const count = await fetchTotalPokemonCount();
  const pokemons = await fetchAllPokemons(count);
  return pokemons;
}
