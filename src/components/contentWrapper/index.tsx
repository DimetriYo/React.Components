import { Component, PropsWithChildren, ReactNode } from 'react';
import style from './style.module.scss';

export class ContentWrapper extends Component<PropsWithChildren> {
  render(): ReactNode {
    return <div className={style.contentWrapper}>{this.props.children}</div>;
  }
}
