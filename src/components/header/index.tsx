import { ChangeEventHandler, Component, ReactNode } from 'react';
import style from './styles.module.scss';
import { ContentWrapper } from '../ContentWrapper';
import { SearchInput } from '../SearchInput';
import { LOCAL_STORAGE_SEARCH_QUERY } from '../../constants';

export class Header extends Component<{
  handleSearchRequestSubmit: (searchRequest: string) => void;
  searchQuery: string;
}> {
  state: Readonly<{ userInput: string }> = {
    userInput: '',
  };

  componentDidUpdate(
    prevProps: Readonly<{
      handleSearchRequestSubmit: (searchRequest: string) => void;
      searchQuery: string;
    }>
  ): void {
    if (prevProps.searchQuery !== this.props.searchQuery)
      this.setState({ ...this.state, userInput: this.props.searchQuery });
  }

  handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = () => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_QUERY, this.state.userInput);
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
