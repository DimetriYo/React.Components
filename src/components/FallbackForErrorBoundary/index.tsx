import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../Porn';
import style from './style.module.scss';

export class FallbackForErrorBoundary extends Component {
  handleRecoverBtnClick = () => {
    location.reload();
  };

  render(): ReactNode {
    return (
      <div className={style.fallbackOuterWrapper}>
        <ContentWrapper>
          <div className={style.fallbackInnerWrapper}>
            <h2>Ooops!</h2>
            <p>Something went wrong!</p>
            <p>Maybe try to reload the page, clicking the button below.</p>
            <button className={style.recoverBtn} type="button" onClick={this.handleRecoverBtnClick}>
              Click me!
            </button>
          </div>
        </ContentWrapper>
      </div>
    );
  }
}
