import { createContext } from 'react';
import { TBeer } from '../../data/types/beer';

export const SearchTermContext = createContext<{
  beersData: TBeer[];
  isContentLoading: boolean;
  updateAppState: (searchTerm: string) => void;
}>({
  beersData: [],
  isContentLoading: false,
  updateAppState: (searchTerm: string) => {
    searchTerm;
  },
});
