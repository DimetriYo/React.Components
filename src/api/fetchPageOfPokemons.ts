import { BASE_URL } from '../constants';
import { Endpoints } from '../endpoints';

export async function fetchPageOfPokemons(offset = 0) {
  const serverUrl = new URL(`${BASE_URL}${Endpoints.POKEMON}`);
  if (Boolean(offset)) serverUrl.searchParams.set('offset', String(offset));
  const response = await fetch(serverUrl);
  const pokemonsData = await response.json();
  const pokemons = pokemonsData.results;
  return pokemons;
}
