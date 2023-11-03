import { useState } from 'react';
import { TBeer } from '../../data/types/beer';
import { fetchBeersFilteredByName } from '../../data/api/fetchBeersFilteredByName';
import { Header } from './Header';
import { Main } from './Main';
import { ContentLoader } from '../../components/ContentLoader';
import { PreLoader } from '../../components/PreLoader';

export function Landing() {
  const [beersData, setBeersData] = useState<TBeer[]>([]);
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);

  const updateAppState: (searchTerm: string) => void = (searchTerm) => {
    setIsContentLoading(true);
    fetchBeersFilteredByName(searchTerm)
      .then((newBeersData) => {
        setBeersData(newBeersData);
      })
      .finally(() => {
        setIsContentLoading(false);
      });
  };
  return (
    <>
      <Header updateAppState={updateAppState} />
      <Main beersData={beersData} />
      {isContentLoading && <ContentLoader />}
      <PreLoader />
    </>
  );
}
