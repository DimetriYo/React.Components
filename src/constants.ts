export const LOCAL_STORAGE_SEARCH_TERM = 'lastSearchTerm';
export const BASE_URL = 'https://api.punkapi.com';
export const ROOT_ENDPOINT = 'v2/beers';

export enum RequestCtrHeaders {
  REQUESTS_LIMIT_PER_DAY = 'x-ratelimit-limit',
  REQUESTS_CTR_REMAINING = 'x-ratelimit-remaining',
}
