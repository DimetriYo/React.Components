import { BASE_URL, ROOT_ENDPOINT } from '../../constants';
import { TBeer } from '../types/beer';

export async function fetchBeersFilteredByName(beerName = ''): Promise<TBeer[]> {
  const url = new URL(ROOT_ENDPOINT, BASE_URL);
  const trimmedBeerName = beerName.trim();
  if (!!trimmedBeerName) {
    url.searchParams.set('beer_name', trimmedBeerName.replaceAll(/\s+/g, '_'));
  }
  const response = await fetch(url);
  const beersData = (await response.json()) as TBeer[];
  return beersData;
}
