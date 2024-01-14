import { ChangeEventHandler, useEffect, useState } from 'react';
import style from './style.module.scss';
import { LOCAL_STORAGE_SEARCH_TERM } from '../../../constants';
import { useSearchParams } from 'react-router-dom';

export function BeerFilterControls() {
  const [userInput, setUserInput] = useState<string>('');
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const oldSearchTerm = localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '';
    setUserInput(oldSearchTerm);
    if (oldSearchTerm) setSearchParams({ searchTerm: oldSearchTerm });
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setUserInput(value);
  };

  const handleFilterBtnClick: () => void = () => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, userInput);
    setSearchParams({ searchTerm: userInput });
  };

  return (
    <div className={style.beerSearchControllsWrapper}>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Beer name or part of it"
      />
      <button type="button" onClick={handleFilterBtnClick}>
        Filter
      </button>
    </div>
  );
}
