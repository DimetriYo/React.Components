import { ContentWrapper } from '../ContentWrapper';
import style from './style.module.scss';

export function FallbackForErrorBoundary() {
  const handleRecoverBtnClick = () => {
    location.reload();
  };

  return (
    <div className={style.fallbackOuterWrapper}>
      <ContentWrapper>
        <div className={style.fallbackInnerWrapper}>
          <h2>Ooops!</h2>
          <p>Something went wrong!</p>
          <p>Maybe try to reload the page, clicking the button below.</p>
          <button className={style.recoverBtn} type="button" onClick={handleRecoverBtnClick}>
            Click me!
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
}
