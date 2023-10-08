import { ChangeEventHandler, Component, ReactNode } from 'react';
import style from './styles.module.scss';
import { ContentWrapper } from '../ContentWrapper';
import { SearchInput } from '../SearchInput';

export class Header extends Component<{
  handleSearchRequestSubmit: (searchRequest: string) => void;
}> {
  state: Readonly<{ userInput: string }> = {
    userInput: '',
  };

  componentDidMount(): void {
    const oldState = localStorage.getItem('lastSearchQuery');
    if (oldState !== null) this.setState({ userInput: oldState });
  }

  handleInputChange: ChangeEventHandler = (e) => {
    const input = e.target;
    if (input instanceof HTMLInputElement)
      this.setState({ userInput: input.value });
  };

  handleSubmit = () => {
    localStorage.setItem('lastSearchQuery', this.state.userInput);
    this.props.handleSearchRequestSubmit(this.state.userInput);
  };

  render(): ReactNode {
    return (
      <header className={style.header}>
        <ContentWrapper>
          <SearchInput
            value={this.state.userInput}
            handleInputChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Search
          </button>
        </ContentWrapper>
      </header>
    );
  }
}
