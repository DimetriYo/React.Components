import style from './style.module.css';
import { BodyBlinder } from '../BodyBlinder';
import { massageKitty } from '../PreLoader';

export function ContentLoader() {
  return (
    <BodyBlinder data-testid="content-loader">
      <img className={style.contentLoader} src={massageKitty} />;
    </BodyBlinder>
  );
}
