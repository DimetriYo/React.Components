import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './styles.module.scss';
import { BeerSearchControls } from '../BeerSearchInput';

export class Header extends Component {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <BeerSearchControls />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
