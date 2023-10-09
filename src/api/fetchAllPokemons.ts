import { BASE_URL } from '../constants';
import { Endpoints } from './endpoints';
import { IPokemonResponse } from './types';

export async function fetchAllPokemons(totalCount: number, offset = 0) {
  const serverUrl = new URL(`${BASE_URL}${Endpoints.POKEMON}`);
  if (Boolean(offset)) serverUrl.searchParams.set('offset', String(offset));
  serverUrl.searchParams.set('limit', totalCount.toString());
  const response = await fetch(serverUrl);
  const { results }: IPokemonResponse = await response.json();
  const pokemons = results;
  return pokemons;
}
