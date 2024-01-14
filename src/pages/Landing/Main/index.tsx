import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';
import { TAppState } from '../../../types';
import { Pagination } from '../../../components/Pagination';
import { CharactersList } from '../../../components/CharactersList';
import { useSearchParams } from 'react-router-dom';
import { ContentLoader } from '../../../components/ContentLoader';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../../data/api/fetchCharacters';

export function Main() {
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [appState, setAppState] = useState<TAppState>({
    characters: [],
    totalPagesCount: 0,
  });

  const page = searchParams.get('page');
  const searchTerm = searchParams.get('searchTerm');

  useEffect(() => {
    updateAppState({ page: Number(page), searchTerm });
  }, []);

  function updateAppState({
    page,
    searchTerm,
  }: {
    searchTerm: string | null;
    page: number | null;
  }) {
    setIsContentLoading(true);
    fetchCharacters({ searchTerm, page })
      .then(({ info: { pages: totalPagesCount }, results }) => {
        setAppState({ characters: results, totalPagesCount });
      })
      .finally(() => {
        setIsContentLoading(false);
      });
  }

  return (
    <div className={style.mainOuterWrapper}>
      {isContentLoading && <ContentLoader />}
      <ContentWrapper>
        <div className={style.mainInnerWrapper}>
          <Pagination pagesCount={appState.totalPagesCount} />
          <CharactersList characters={appState.characters} />
        </div>
      </ContentWrapper>
    </div>
  );
}
