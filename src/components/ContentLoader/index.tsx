import { Component, ReactNode } from 'react';
import style from './style.module.scss';
import { BodyBlinder } from '../BodyBlinder';
import { massageKitty } from '../PreLoader';

export class ContentLoader extends Component {
  render(): ReactNode {
    return (
      <BodyBlinder>
        <img className={style.contentLoader} src={massageKitty} />;
      </BodyBlinder>
    );
  }
}
