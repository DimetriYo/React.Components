import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { TCharacter } from '../../types';
import { useSearchParams } from 'react-router-dom';
import { fetchCharacters } from '../../api/fetchCharacters';

export const CharactersContext = createContext<TCharacter[]>([]);
export const PagesCountContext = createContext<number>(0);

export const useCharacters = () => useContext(CharactersContext);
export const usePagesCount = () => useContext(PagesCountContext);

export function CharactersProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || undefined;
  const searchTerm = searchParams.get('searchTerm') || undefined;

  useEffect(() => {
    fetchCharacters({ page, searchTerm }).then(({ info: { pages }, results }) => {
      setCharacters(results);
      setPagesCount(pages);
    });
  }, [page, searchTerm]);

  return (
    <CharactersContext.Provider value={characters}>
      <PagesCountContext.Provider value={pagesCount}>{children}</PagesCountContext.Provider>
    </CharactersContext.Provider>
  );
}
