import { ChangeEventHandler, useEffect, useRef } from 'react';
import { useSearchTerm, useSetSearchTerm } from '../../SearchTermProvider';

export function SearchField() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setSearchTerm = useSetSearchTerm();
  const searchTerm = useSearchTerm();

  useEffect(() => {
    if (inputRef.current === null) return;

    inputRef.current.value = searchTerm;
  }, []);

  const handleBtnClick = () => {
    if (inputRef.current === null) return;

    setSearchTerm(inputRef.current.value);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputRef.current === null) return;
    inputRef.current.value = e.target.value;
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleInputChange} />
      <button
        onClick={handleBtnClick}
        className="px-2 rounded bg-gray-200 hover:bg-gray-400 active:bg-gray-700 hover:text-white active:text-white "
      >
        Search
      </button>
    </div>
  );
}
