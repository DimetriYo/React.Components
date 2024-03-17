import { SearchField } from './components/SearchField';

export function Header() {
  return (
    <header className="flex gap-2 p-4 bg-green-400 border-b-2 border-solid border-cyan-700">
      <SearchField />
    </header>
  );
}
