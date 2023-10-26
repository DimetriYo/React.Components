import { Component, PropsWithChildren, ReactNode } from 'react';
import style from './style.module.scss';

export class BodyBlinder extends Component<PropsWithChildren> {
  render(): ReactNode {
    return <div className={style.bodyBlinder}>{this.props.children}</div>;
  }
}
