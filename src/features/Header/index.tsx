import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Pagination } from '../Pagination';
import { SearchField } from './components/SearchField';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Header(props: Props) {
  return (
    <header {...props}>
      <SearchField />
      <Pagination />
    </header>
  );
}
