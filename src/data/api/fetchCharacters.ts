import { BASE_URL, ROOT_ENDPOINT } from '../../constants';
import { TCharacter } from '../types/character';

type TResponse = {
  info: object;
  results: TCharacter[];
};

export async function fetchCharacters(beerName = ''): Promise<TResponse> {
  const url = new URL(ROOT_ENDPOINT, BASE_URL);
  if (!!beerName) {
    url.searchParams.set('name', beerName.trim().replaceAll(/\s+/g, '_'));
  }
  const response = await fetch(url);
  const characterData = (await response.json()) as TResponse;
  return characterData;
}
