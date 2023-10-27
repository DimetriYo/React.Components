import { ChangeEventHandler, Component, ReactNode } from 'react';
import style from './style.module.scss';
import { LOCAL_STORAGE_SEARCH_TERM } from '../../../constants';
// import { SearchTermContext } from '../context';

export class BeerFilterControls extends Component<{
  updateAppState: (searchTerm: string) => void;
}> {
  // static context = SearchTermContext;
  // declare context: React.ContextType<typeof SearchTermContext>;
  state: Readonly<{ userInput: string }> = {
    userInput: '',
  };

  componentDidMount(): void {
    const oldSearchTerm = localStorage.getItem(LOCAL_STORAGE_SEARCH_TERM) || '';
    this.setState({ ...this.state, userInput: oldSearchTerm });
    this.props.updateAppState(oldSearchTerm);
  }

  handleInputChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    this.setState({ ...this.state, userInput: value });
  };

  handleFilterBtnClick: () => void = () => {
    const newUserInput = this.state.userInput;
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, newUserInput);
    this.props.updateAppState(newUserInput);
  };

  render(): ReactNode {
    return (
      <div className={style.beerSearchControllsWrapper}>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleInputChange}
          placeholder="Beer name or part of it"
        />
        <button type="button" onClick={this.handleFilterBtnClick}>
          Filter
        </button>
      </div>
    );
  }
}
