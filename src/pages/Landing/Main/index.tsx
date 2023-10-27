import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';
import { TBeer } from '../../../data/types/beer';
import { BeerCard } from '../BeerCard';
import { NothingFoundBackup } from '../NothingFoundBackup';

export function Main({ beersData }: { beersData: TBeer[] }) {
  const beersDataLength = beersData.length;
  return (
    <div className={style.mainOuterWrapper}>
      <ContentWrapper>
        <div className={style.mainInnerWrapper}>
          {beersData.map((beer) => (
            <BeerCard key={beer.id} {...beer} />
          ))}
          {!beersDataLength && <NothingFoundBackup />}
        </div>
      </ContentWrapper>
    </div>
  );
}
