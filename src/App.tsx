import { Component } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { IBasicPokemon } from './shared/types/pokemon';
import { getPokemons } from './helpers/getPokemons';

export class App extends Component {
  state: Readonly<{ pokemons: IBasicPokemon[]; searchQuery: string }> = {
    searchQuery: '',
    pokemons: [],
  };

  componentDidMount(): void {
    getPokemons().then((pokemons) => {
      this.setState({ ...this.state, pokemons });
    });
  }

  handleSearchRequestSubmit = (newSearchQuery: string) => {
    this.setState({ ...this.state, searchQuery: newSearchQuery });
  };

  render() {
    return (
      <>
        <Header handleSearchRequestSubmit={this.handleSearchRequestSubmit} />
        <Main
          pokemons={this.state.pokemons}
          searchQuery={this.state.searchQuery}
        />
      </>
    );
  }
}

export default App;
