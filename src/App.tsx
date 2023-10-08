import { Component } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { IBasicPokemon } from './shared/types/pokemon';
import { getPokemons } from './helpers/getPokemons';

export class App extends Component {
  state: Readonly<{ pokemons: IBasicPokemon[] }> = {
    pokemons: [],
  };

  componentDidMount(): void {
    getPokemons().then((pokemons) => this.setState({ pokemons }));
  }

  render() {
    return (
      <>
        <Header />
        <Main pokemons={this.state.pokemons} />
      </>
    );
  }
}

export default App;
