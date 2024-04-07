import { PropsWithChildren, createContext, useContext, useState } from 'react';

const SearchTermContext = createContext('');
const SetSearchTermContext = createContext<(newSearchTerm: string) => void>(() => {});

export function SearchTermProvider({ children }: PropsWithChildren) {
  const oldSearchTerm = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(oldSearchTerm || '');
  const updateSearchTerm = (newSearchTerm: string) => {
    localStorage.setItem('searchTerm', newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  return (
    <SearchTermContext.Provider value={searchTerm}>
      <SetSearchTermContext.Provider value={updateSearchTerm}>
        {children}
      </SetSearchTermContext.Provider>
    </SearchTermContext.Provider>
  );
}

export const useSearchTerm = () => useContext(SearchTermContext);
export const useSetSearchTerm = () => useContext(SetSearchTermContext);
