import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper';
import styles from './style.module.scss';
import { type IBasicPokemon } from '../../shared/types/pokemon';
import { PokemonCard } from '../PokemonCard';
import { PokemonCardsCollection } from '../PokemonCardsList';
import { getFilteredAndSlicedPokemons } from './helpers/getFilteredAndSlicedPokemons';

export class Main extends Component<{
  searchQuery?: string;
  pokemons: IBasicPokemon[];
}> {
  render(): ReactNode {
    return (
      <main className={styles.main}>
        <ContentWrapper>
          <PokemonCardsCollection>
            {getFilteredAndSlicedPokemons(this.props).map((pokemon) => (
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
