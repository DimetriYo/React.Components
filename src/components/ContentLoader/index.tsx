import { Component, ReactNode } from 'react';
import massageCat from '../../assets/massageCat.gif';
import style from './style.module.scss';
import { BodyBlinder } from '../BodyBlinder';

export class ContentLoader extends Component {
  render(): ReactNode {
    return (
      <BodyBlinder>
        <img className={style.contentLoader} src={massageCat} />;
      </BodyBlinder>
    );
  }
}
