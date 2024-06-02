import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

const CurrentPaqeContext = createContext<[number, (x: number) => void]>([
  0,
  () => {},
]);
export const useCurrentPage = () => useContext(CurrentPaqeContext);

export function CurrentPageProvider({ children }: PropsWithChildren) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlPage = searchParams.get('page');

  const updateCurrentPage = (newPageNumber: number) => {
    setCurrentPage(newPageNumber);
    setSearchParams((oldSP) => {
      oldSP.set('page', newPageNumber.toString());

      return oldSP;
    });
  };

  useEffect(() => {
    const urlPageNumber = Number(urlPage);
    if (urlPage !== null) {
      if (Number.isInteger(urlPageNumber)) {
        setCurrentPage(urlPageNumber);
      } else {
        setSearchParams((oldSP) => {
          oldSP.delete('page');

          return oldSP;
        });
      }
    }
  }, []);

  return (
    <CurrentPaqeContext.Provider value={[currentPage, updateCurrentPage]}>
      {children}
    </CurrentPaqeContext.Provider>
  );
}
