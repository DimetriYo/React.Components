import { ChangeEventHandler, useEffect, useRef } from 'react';
import { useSearchTerm } from '../../SearchTermProvider';

export function SearchField() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, updateSearchTerm] = useSearchTerm();

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.value = searchTerm || '';
    }
  }, [searchTerm]);

  const handleBtnClick = () => {
    if (inputRef.current === null) return;

    updateSearchTerm(inputRef.current.value);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (inputRef.current === null) return;
    inputRef.current.value = e.target.value;
  };

  return (
    <div className="ml-4 flex gap-3">
      <input
        className="rounded px-2"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button
        onClick={handleBtnClick}
        className="px-2 rounded bg-gray-200 hover:bg-gray-400 active:bg-gray-700 hover:text-white active:text-white "
      >
        Search
      </button>
    </div>
  );
}
