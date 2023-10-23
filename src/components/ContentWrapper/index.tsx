import { Component, PropsWithChildren } from 'react';
import style from './style.module.scss';

export class ContentWrapper extends Component<PropsWithChildren> {
  render() {
    return <div className={style.contentWrapper}>{this.props.children}</div>;
  }
}
