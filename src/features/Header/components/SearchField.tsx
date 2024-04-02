import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchParams } from '../../../types';

export function SearchField() {
  const [searchParams, setSearchParams] = useSearchParams({
    searchTerm: '',
  });
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('searchTerm') || '');

  const handleFilterBtnClick = () => {
    const page = searchParams.get('page');
    const newSearchParams: SearchParams = {};

    if (page) newSearchParams.page = page;
    newSearchParams.searchTerm = searchTerm;

    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button
        onClick={handleFilterBtnClick}
        className="px-2 rounded bg-gray-200 hover:bg-gray-400 active:bg-gray-700 hover:text-white active:text-white "
      >
        Search
      </button>
    </div>
  );
}
