import { PaginationCircle } from './PaginationCircle';
import { useSearchParams } from 'react-router-dom';
import style from './style.module.scss';

export function Pagination({ pagesCount }: { pagesCount: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={style.charactersList}>
      <PaginationCircle index={searchParams.get('page')} />
      <PaginationCircle onClick={() => setSearchParams({ page: '2' })} index={'2'} />
      <PaginationCircle onClick={() => setSearchParams({ page: '3' })} index={'3'} />
      ...
      <PaginationCircle
        onClick={() => setSearchParams({ page: `${pagesCount}` })}
        index={`${pagesCount}`}
      />
    </div>
  );
}
