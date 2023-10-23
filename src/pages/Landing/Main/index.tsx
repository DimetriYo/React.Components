import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';

export class Main extends Component {
  render(): ReactNode {
    return (
      <div className={style.mainOuterWrapper}>
        <ContentWrapper>Main</ContentWrapper>
      </div>
    );
  }
}
