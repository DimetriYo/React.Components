import { ChangeEventHandler, useEffect, useState } from 'react';
import style from './style.module.scss';
import { LOCAL_STORAGE_SEARCH_TERM } from '../../../constants';

export function BeerFilterControls({
  updateAppState,
}: {
  updateAppState: (searchTerm: string) => void;
}) {
  const [userInput, setUserInput] = useState<string>('');

  useEffect(() => {
    const oldSearchTerm = localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '';
    setUserInput(oldSearchTerm);
    updateAppState(oldSearchTerm);
  }, []);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setUserInput(value);
  };

  const handleFilterBtnClick: () => void = () => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, userInput);
    updateAppState(userInput);
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
