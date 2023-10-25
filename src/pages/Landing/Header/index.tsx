import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import { BeerFilterControls } from '../BeerSearchControls';
import style from './styles.module.scss';

export class Header extends Component<{
  updateAppState: (searchTerm: string) => void;
}> {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <BeerFilterControls updateAppState={this.props.updateAppState} />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
