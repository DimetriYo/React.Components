import { Component, ReactNode } from 'react';
import { BeerFilterControls } from '../BeerSearchControls';
import style from './styles.module.scss';
import { ContentWrapper } from '../../../components/ContentWrapper';
import { ErrorGeneratingBtn } from '../ErrorGeneratingBtn';
import { SearchTermContext } from '../context';

export class Header extends Component {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <SearchTermContext.Consumer>
              {({ updateAppState }) => <BeerFilterControls updateAppState={updateAppState} />}
            </SearchTermContext.Consumer>
            <ErrorGeneratingBtn />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
