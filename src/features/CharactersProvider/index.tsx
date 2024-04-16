import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { TCharacter } from '../../types';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '../../api/fetchCharacters';
import { useSearchTerm } from '../SearchTermProvider';
import { ContentLoader } from '../../components/ContentLoader';

export const CharactersContext = createContext<TCharacter[]>([]);
export const PagesCountContext = createContext<number>(0);

export const useCharacters = () => useContext(CharactersContext);
export const usePagesCount = () => useContext(PagesCountContext);

export function CharactersProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const searchTerm = useSearchTerm();

  const page = searchParams.get('page') || undefined;

  useEffect(() => {
    if (!isLoading) setIsLoading(true);

    fetchCharacters({ page, searchTerm })
      .then(({ info: { pages }, results }) => {
        setCharacters(results);
        setPagesCount(pages);
      })
      .finally(() => setIsLoading(false));
  }, [page, searchTerm]);

  return (
    <CharactersContext.Provider value={characters}>
      {isLoading && <ContentLoader />}
      <PagesCountContext.Provider value={pagesCount}>{children}</PagesCountContext.Provider>
    </CharactersContext.Provider>
  );
}
