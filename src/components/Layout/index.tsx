import { Outlet } from 'react-router-dom';
import { Header } from '../../features/Header';
import { Pagination } from '../../features/Pagination';

export function Layout() {
  return (
    <>
      <Header />
      <Pagination />
      <main>
        <Outlet />
      </main>
    </>
  );
}
