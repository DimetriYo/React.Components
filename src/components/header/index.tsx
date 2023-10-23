import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../contentWrapper';
import style from './styles.module.scss';

export class Header extends Component {
  render(): ReactNode {
    return (
      <div className={style.headerOuterWrapper}>
        <ContentWrapper>Header</ContentWrapper>
      </div>
    );
  }
}
