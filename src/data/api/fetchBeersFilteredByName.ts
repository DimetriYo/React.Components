import { BASE_URL, ROOT_ENDPOINT, RequestCtrHeaders } from '../../constants';
import { TBeer } from '../types/beer';

export async function fetchBeersFilteredByName(beerName = ''): Promise<{
  requestsLimitPerDay: string;
  requestsLeftCtr: string;
  beersData: TBeer[];
}> {
  const url = new URL(`${[ROOT_ENDPOINT, beerName].join('/')}`, BASE_URL);
  const response = await fetch(url);
  const requestsLeftCtr = response.headers.get(RequestCtrHeaders.REQUESTS_CTR_REMAINING)!;
  const requestsLimitPerDay = response.headers.get(RequestCtrHeaders.REQUESTS_LIMIT_PER_DAY)!;
  const beersData = (await response.json()) as TBeer[];
  return { requestsLimitPerDay, requestsLeftCtr, beersData };
}
