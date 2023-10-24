import { Component, ReactNode } from 'react';
import { Header } from './pages/Landing/Header';
import { Main } from './pages/Landing/Main';
import { LOCAL_STORAGE_SEARCH_TERM } from './constants';

class App extends Component {
  state: Readonly<{ searchTerm: string }> = { searchTerm: '' };

  updateFilterTerm: (userInput: string) => void = (userInput) => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_TERM, userInput);
    this.setState({ ...this.state, searchQuery: userInput });
  };

  render(): ReactNode {
    return (
      <>
        <Header updateFilterTerm={this.updateFilterTerm} />
        <Main {...this.state} />
      </>
    );
  }
}

export default App;
