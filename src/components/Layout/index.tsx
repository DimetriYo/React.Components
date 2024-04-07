import { Outlet } from 'react-router-dom';
import { Header } from '../../features/Header';
import { Pagination } from '../../features/Pagination';
import { CharactersList } from '../CharactersList';
import { CharactersProvider } from '../../features/CharactersProvider';
import { SearchTermProvider } from '../../features/SearchTermProvider';

export function Layout() {
  return (
    <div className="flex flex-col h-[100vh]">
      <SearchTermProvider>
        <CharactersProvider>
          <div className="sticky top-0">
            <Header />
            <Pagination />
          </div>
          <main className="flex-grow flex h-full overflow-auto bg-yellow-500">
            <CharactersList />
            <Outlet />
          </main>
        </CharactersProvider>
      </SearchTermProvider>
    </div>
  );
}
