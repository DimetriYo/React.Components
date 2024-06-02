import { Outlet } from 'react-router-dom';
import { Header } from '../../features/Header';
import { CharactersList } from '../CharactersList';
import { CharactersProvider } from '../../features/CharactersProvider';
import { SearchTermProvider } from '../../features/SearchTermProvider';

export function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <CharactersProvider>
        <SearchTermProvider>
          <Header className="sticky top-0 flex flex-col gap-2 pt-4 bg-green-400 border-b-2 border-solid border-cyan-700" />
          <main className="flex-grow flex h-full overflow-auto bg-yellow-500">
            <CharactersList className="max-h-full overflow-y-scroll flex-grow basis-1/2" />
            <Outlet />
          </main>
        </SearchTermProvider>
      </CharactersProvider>
    </div>
  );
}
