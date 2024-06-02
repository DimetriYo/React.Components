import { useState } from 'react';
import { PaginationCircle } from './PaginationCircle';
import style from './style.module.css';
import { useCharacters } from '../CharactersProvider';
import { useSearchTerm } from '../SearchTermProvider';

export function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [, pagesCount, updateCharacters] = useCharacters();
  const [searchTerm] = useSearchTerm();

  const handlePageBtnClick = (page: number) => {
    setCurrentPage(page);
    updateCharacters(page, searchTerm || '');
  };

  return (
    pagesCount > 0 && (
      <div className={style.pagesList}>
        <PaginationCircle index={currentPage.toString()} active />
        {Array(pagesCount)
          .fill(null)
          .map((_, index) => (
            <PaginationCircle
              index={(index + 1).toString()}
              key={index}
              onClick={() => handlePageBtnClick(index + 1)}
            />
          ))}
      </div>
    )
  );
}
