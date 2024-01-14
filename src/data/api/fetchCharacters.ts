import { BASE_URL, ROOT_ENDPOINT } from '../../constants';
import { TCharacter } from '../../types';

type TResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: TCharacter[];
};

export async function fetchCharacters({
  searchTerm = '',
  page = 1,
}: {
  searchTerm: string | null;
  page: number | null;
}): Promise<TResponse> {
  const url = new URL(ROOT_ENDPOINT, BASE_URL);

  if (!!page) {
    url.searchParams.set('page', page.toString());
  }

  if (!!searchTerm) {
    url.searchParams.set('name', searchTerm.trim());
  }

  const response = await fetch(url);
  if (response.status >= 400) {
    const nothingFoundResponse = {
      info: { count: 0, next: null, pages: 0, prev: null },
      results: [],
    };
    return nothingFoundResponse;
  }
  const characterData = (await response.json()) as TResponse;
  return characterData;
}
