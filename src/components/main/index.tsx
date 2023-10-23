import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper';
import styles from './style.module.scss';
import { type IBasicPokemon } from '../../shared/types/pokemon';
import { PokemonCard } from '../PokemonCard';
import { PokemonCardsCollection } from '../PokemonCardsList';
import { getFilteredAndSlicedPokemons } from './helpers/getFilteredAndSlicedPokemons';
import { getPokemons } from '../../helpers/getPokemons';

export class Main extends Component<{
  searchQuery: string;
}> {
  state: Readonly<{
    pokemonsData: IBasicPokemon[];
    shownPokemons: IBasicPokemon[];
  }> = {
    pokemonsData: [],
    shownPokemons: [],
  };

  componentDidMount(): void {
    getPokemons().then((pokemonsData) => {
      this.setState({ ...this.state, pokemonsData });
    });
  }

  componentDidUpdate(
    prevProps: Readonly<{ searchQuery: string }>,
    prevState: Readonly<{
      pokemonsData: IBasicPokemon[];
      shownPokemons: IBasicPokemon[];
    }>
  ): void {
    if (
      (prevProps.searchQuery !== this.props.searchQuery &&
        !!this.state.pokemonsData.length) ||
      prevState.pokemonsData.length !== this.state.pokemonsData.length
    ) {
      const shownPokemons = getFilteredAndSlicedPokemons({
        pokemons: this.state.pokemonsData,
        searchQuery: this.props.searchQuery,
      });
      this.setState({ ...this.state, shownPokemons });
    }
  }

  render(): ReactNode {
    const pokemons = this.state.shownPokemons;
    return (
      <main className={styles.main}>
        <ContentWrapper>
          <PokemonCardsCollection>
            {pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </PokemonCardsCollection>
        </ContentWrapper>
      </main>
    );
  }
}
