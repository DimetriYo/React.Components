import { Component, ReactNode } from 'react';
import style from './style.module.scss';
import { emptyPokets } from '../../../components/PreLoader';

export class NothingFoundBackup extends Component {
  render(): ReactNode {
    return (
      <div className={style.nothingFoundBackup}>
        <h2>Sorry, but we couldn&apos;t find any booze like this.</h2>
        <img src={emptyPokets} width={300} />
      </div>
    );
  }
}
