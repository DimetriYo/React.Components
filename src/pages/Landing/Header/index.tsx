import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './styles.module.scss';
import { BeerFilterControls } from '../BeerSearchControls';

export class Header extends Component<{ updateFilterTerm: (userInput: string) => void }> {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <BeerFilterControls {...this.props} />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
