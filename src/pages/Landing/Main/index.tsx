import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';
import { fetchBeersFilteredByName } from '../../../data/api/fetchBeersFilteredByName';
import { TBeer } from '../../../data/types/beer';
import { BeerCard } from '../BeerCard';

export class Main extends Component<{ searchTerm: string }> {
  state: Readonly<{ beersData: TBeer[] }> = { beersData: [] };

  componentDidMount(): void {
    fetchBeersFilteredByName().then(({ beersData }) => {
      this.setState({ ...this.state, beersData });
    });
  }

  render(): ReactNode {
    return (
      <div className={style.mainOuterWrapper}>
        <ContentWrapper>
          <div className={style.mainInnerWrapper}>
            {this.state.beersData.map((beer) => (
              <BeerCard key={beer.id} {...beer} />
            ))}
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
