import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/Porn';
import style from './style.module.scss';
import { TBeer } from '../../../data/types/beer';
import { BeerCard } from '../BeerCard';

export class Main extends Component<{ beersData: TBeer[] }> {
  render(): ReactNode {
    return (
      <div className={style.mainOuterWrapper}>
        <ContentWrapper>
          <div className={style.mainInnerWrapper}>
            {this.props.beersData.map((beer) => (
              <BeerCard key={beer.id} {...beer} />
            ))}
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
