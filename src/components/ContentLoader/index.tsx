import style from './style.module.css';
import { BodyBlinder } from '../BodyBlinder';
import massageKitty from '../../assets/massageCat.gif';

export function ContentLoader() {
  return (
    <BodyBlinder>
      <img
        data-testid="content-loader"
        className={style.contentLoader}
        src={massageKitty}
      />
    </BodyBlinder>
  );
}
