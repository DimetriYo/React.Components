import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TCharacter } from '../../types';
import { fetchCharacters } from '../../api/fetchCharacters';
import { ContentLoader } from '../../components/ContentLoader';

export const CharactersContext = createContext<
  [TCharacter[], number, (page: number, searchTerm: string) => void]
>([[], 0, () => {}]);

export const useCharacters = () => useContext(CharactersContext);

export function CharactersProvider({ children }: PropsWithChildren) {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const updateCharacters = (page: number, searchTerm = '') => {
    setIsLoading(true);

    fetchCharacters({ page: page.toString(), searchTerm })
      .then(({ info: { pages }, results }) => {
        setCharacters(results);
        setPagesCount(pages);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <CharactersContext.Provider
      value={[characters, pagesCount, updateCharacters]}
    >
      {isLoading && <ContentLoader />}
      {children}
    </CharactersContext.Provider>
  );
}
