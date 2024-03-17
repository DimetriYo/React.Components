import { useSearchParams } from 'react-router-dom';
import { PaginationCircle } from './PaginationCircle';
import { SearchParams } from '../../types';
import { usePagesCount } from '../CharactersProvider';
import style from './style.module.css';
import { useEffect } from 'react';

export function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pagesCount = usePagesCount();

  const currentPage = searchParams.get('page');
  const searchTerm = searchParams.get('searchTerm');

  const getNewSearchParams = (page: number) => {
    const searchTerm = searchParams.get('searchTerm');
    const newSearchParams: SearchParams = {};

    if (page) newSearchParams.page = page.toString();
    if (searchTerm) newSearchParams.searchTerm = searchTerm;

    return newSearchParams;
  };

  const handlePageBtn = (page: number) => {
    setSearchParams(getNewSearchParams(page));
  };

  useEffect(() => {
    if (pagesCount || searchTerm) {
      setSearchParams(getNewSearchParams(1));
    }
    if (!pagesCount) {
      setSearchParams(getNewSearchParams(0));
    }
  }, [pagesCount, searchTerm]);

  return (
    !!pagesCount && (
      <div className={style.pagesList}>
        <PaginationCircle index={currentPage} active />
        {Array(pagesCount)
          .fill(null)
          .map((_, index) => (
            <PaginationCircle
              index={(index + 1).toString()}
              key={index}
              onClick={() => handlePageBtn(index + 1)}
            />
          ))}
      </div>
    )
  );
}
