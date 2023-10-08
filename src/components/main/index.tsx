import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper';
import styles from './style.module.scss';
import { type IBasicPokemon } from '../../shared/types/pokemon';
import { POKEMONS_ON_PAGE } from '../../constants';
import { PokemonCard } from '../PokemonCard';
import { PokemonCardsCollection } from '../PokemonCardsList';

export class Main extends Component<{ pokemons: IBasicPokemon[] }> {
  state: Readonly<{ pokemonsLimitOnPage: number; offset: number }> = {
    pokemonsLimitOnPage: POKEMONS_ON_PAGE,
    offset: 0,
  };
  render(): ReactNode {
    return (
      <main className={styles.main}>
        <ContentWrapper>
          <PokemonCardsCollection>
            {this.props.pokemons
              .slice(
                this.state.offset,
                this.state.offset + this.state.pokemonsLimitOnPage
              )
              .map((pokemon) => (
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
