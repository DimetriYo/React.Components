import { Component, ReactNode } from 'react';
import style from './style.module.scss';

export class ErrorGeneratingBtn extends Component {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  handleBurnInHellBtnClick = () => {
    this.setState({ ...this.state, hasError: true });
  };
  render(): ReactNode {
    if (this.state.hasError) {
      const burnInHellError = new Error('Burn m@$#%^&r! BUURN!!!11');
      throw burnInHellError;
    }
    return (
      <button
        className={style.errorGeneratingBtn}
        type="button"
        onClick={this.handleBurnInHellBtnClick}
      >
        Burn in Hell!!11
      </button>
    );
  }
}
