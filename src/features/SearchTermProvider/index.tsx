import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacters } from '../CharactersProvider';

const SearchTermContext = createContext<[string | null, (id: string) => void]>([
  '',
  () => {},
]);

export function SearchTermProvider({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [, , updateCharacters] = useCharacters();

  const updateSearchTerm = (newSearchTerm: string) => {
    if (newSearchTerm === '') {
      localStorage.removeItem('searchTerm');
      setSearchParams((oldSearchParams) => {
        oldSearchParams.delete('searchTerm');

        return oldSearchParams;
      });
    } else {
      localStorage.setItem('searchTerm', newSearchTerm);
      setSearchParams((oldSearchParams) => {
        oldSearchParams.set('searchTerm', newSearchTerm);

        return oldSearchParams;
      });
    }

    setSearchTerm(newSearchTerm);
    updateCharacters(1, newSearchTerm);
  };

  useEffect(() => {
    const urlSearchTerm = searchParams.get('searchTerm');
    const localStorageSearchTerm = localStorage.getItem('searchTerm');
    const newSearchTerm = urlSearchTerm || localStorageSearchTerm;

    if (newSearchTerm !== null) {
      setSearchTerm(newSearchTerm);
      updateCharacters(1, newSearchTerm);

      if (urlSearchTerm === null) {
        setSearchParams((oldSearchParams) => {
          oldSearchParams.set('searchTerm', newSearchTerm);
          return oldSearchParams;
        });
      } else {
        localStorage.setItem('searchTerm', newSearchTerm);
      }
    } else {
      setSearchTerm('');
      updateCharacters(1, '');
    }
  }, []);

  return (
    <SearchTermContext.Provider value={[searchTerm, updateSearchTerm]}>
      {children}
    </SearchTermContext.Provider>
  );
}

export const useSearchTerm = () => useContext(SearchTermContext);
