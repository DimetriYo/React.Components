import { Component } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { LOCAL_STORAGE_SEARCH_QUERY } from './constants';

export class App extends Component {
  state: Readonly<{ searchQuery: string }> = {
    searchQuery: '',
  };

  componentDidMount(): void {
    const searchQuery = localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY);
    this.setState({ ...this.state, searchQuery });
  }

  handleSearchRequestSubmit = (newSearchQuery: string) => {
    this.setState({ ...this.state, searchQuery: newSearchQuery });
  };

  render() {
    return (
      <>
        <Header
          handleSearchRequestSubmit={this.handleSearchRequestSubmit}
          searchQuery={this.state.searchQuery}
        />
        <Main {...this.state} />
      </>
    );
  }
}

export default App;
