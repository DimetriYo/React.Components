import { Component, ReactNode } from 'react';
import { BeerFilterControls } from '../BeerSearchControls';
import style from './styles.module.scss';
import { ContentWrapper } from '../../../components/Porn';
import { ErrorGeneratingBtn } from '../ErrorGeneratingBtn';

export class Header extends Component<{
  updateAppState: (searchTerm: string) => void;
}> {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>
          <div className={style.headerInnerWrapper}>
            <BeerFilterControls updateAppState={this.props.updateAppState} />
            <ErrorGeneratingBtn />
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
