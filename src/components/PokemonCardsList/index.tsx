import { Component, PropsWithChildren, ReactNode } from 'react';
import style from './style.module.scss';

export class PokemonCardsCollection extends Component<PropsWithChildren> {
  render(): ReactNode {
    return (
      <div className={style.pokemonCardsCollection}>{this.props.children}</div>
    );
  }
}
