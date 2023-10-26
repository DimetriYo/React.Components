import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';
import { TBeer } from '../../../data/types/beer';
import { BeerCard } from '../BeerCard';
import { NothingFoundBackup } from '../NothingFoundBackup';

export class Main extends Component<{ beersData: TBeer[] }> {
  render(): ReactNode {
    const beersDataLength = this.props.beersData.length;
    return (
      <div className={style.mainOuterWrapper}>
        <ContentWrapper>
          <div className={style.mainInnerWrapper}>
            {this.props.beersData.map((beer) => (
              <BeerCard key={beer.id} {...beer} />
            ))}
            {!beersDataLength && <NothingFoundBackup />}
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
