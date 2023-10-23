import { ChangeEventHandler, Component, ReactNode } from 'react';
import style from './style.module.scss';

export class BeerSearchControls extends Component {
  state: Readonly<{ userInput: string }> = {
    userInput: '',
  };

  handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    this.setState({ userInput: value });
  };

  render(): ReactNode {
    return (
      <div className={style.beerSearchControllsWrapper}>
        <input type="text" value={this.state.userInput} onChange={this.handleInputChange} />
        <button type="button">Search</button>
      </div>
    );
  }
}
