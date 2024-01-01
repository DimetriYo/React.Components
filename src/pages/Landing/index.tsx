import { useState } from 'react';
import { TCharacter } from '../../data/types/character';
import { fetchCharacters } from '../../data/api/fetchCharacters';
import { Header } from './Header';
import { Main } from './Main';
import { ContentLoader } from '../../components/ContentLoader';
import { PreLoader } from '../../components/PreLoader';

export function Landing() {
  const [charactersData, setCharactersData] = useState<TCharacter[]>([]);
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);

  const updateAppState: (searchTerm: string) => void = (searchTerm) => {
    setIsContentLoading(true);
    fetchCharacters(searchTerm)
      .then((newCharactersData) => {
        setCharactersData(newCharactersData.results);
      })
      .finally(() => {
        setIsContentLoading(false);
      });
  };

  return (
    <>
      <Header updateAppState={updateAppState} />
      <Main charactersData={charactersData} />
      {isContentLoading && <ContentLoader />}
      <PreLoader />
    </>
  );
}
