import { Component, ReactNode } from 'react';
import { BeerFilterControls } from '../BeerSearchControls';
import style from './styles.module.scss';
import { ContentWrapper } from '../../../components/ContentWrapper';
import { ErrorGeneratingBtn } from '../ErrorGeneratingBtn';

export class Header extends Component {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <BeerFilterControls />
            <ErrorGeneratingBtn />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
