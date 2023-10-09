import { Component, ReactNode } from 'react';
import { IPokemon } from '../../shared/types/pokemon';
import style from './style.module.scss';

export class PokemonCardImage extends Component<
  Pick<IPokemon, 'sprites' | 'name'>
> {
  render(): ReactNode {
    return (
      <img
        className={style.pokemonImg}
        src={this.props.sprites.front_default}
        alt={`Image of ${this.props.name}`}
      />
    );
  }
}
