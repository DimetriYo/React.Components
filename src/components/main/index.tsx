import { Component, ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper';
import styles from './style.module.scss';
import pokemons from '../../shared/pokemonsData/index.json';

export class Main extends Component {
  state: Readonly<{ pokemons: unknown[] }> = { pokemons };
  render(): ReactNode {
    return (
      <main className={styles.main}>
        <ContentWrapper>
          {pokemons.map((pokemon) => (
            <div key={pokemon.url}>{pokemon.name}</div>
          ))}
        </ContentWrapper>
      </main>
    );
  }
}
