import { ChangeEventHandler, Component, ReactNode } from 'react';
import style from './style.module.scss';

export class BeerFilterControls extends Component<{
  updateFilterTerm: (userInput: string) => void;
}> {
  state: Readonly<{ userInput: string }> = {
    userInput: '',
  };

  handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    this.setState({ userInput: value });
  };

  handleFilterBtnClick: () => void = () => {
    this.props.updateFilterTerm(this.state.userInput);
  };

  render(): ReactNode {
    return (
      <div className={style.beerSearchControllsWrapper}>
        <input type="text" value={this.state.userInput} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleFilterBtnClick}>
          Filter
        </button>
      </div>
    );
  }
}
