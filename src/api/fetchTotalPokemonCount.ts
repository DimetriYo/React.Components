import { BASE_URL } from '../constants';
import { Endpoints } from './endpoints';
import { IPokemonResponse } from './types';

export async function fetchTotalPokemonCount(offset = 0) {
  const serverUrl = new URL(`${BASE_URL}${Endpoints.POKEMON}`);
  if (Boolean(offset)) serverUrl.searchParams.set('offset', String(offset));
  const response = await fetch(serverUrl);
  const { count }: IPokemonResponse = await response.json();
  return count;
}
