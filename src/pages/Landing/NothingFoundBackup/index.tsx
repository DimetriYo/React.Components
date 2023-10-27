import style from './style.module.scss';
import { emptyPokets } from '../../../components/PreLoader';

export function NothingFoundBackup() {
  return (
    <div className={style.nothingFoundBackup}>
      <h2>Sorry, but we couldn&apos;t find any booze like this.</h2>
      <img src={emptyPokets} width={300} />
    </div>
  );
}
