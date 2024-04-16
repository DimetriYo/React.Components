import { BASE_URL, ROOT_ENDPOINT } from '../constants';
import { TCharacter } from '../types';

export async function fetchCharacterById(id: string) {
  const url = new URL(`${ROOT_ENDPOINT}/${id}`, BASE_URL);
  const response = await fetch(url);
  const character = (await response.json()) as TCharacter;
  return character;
}
