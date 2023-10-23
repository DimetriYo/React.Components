import { Component, ReactNode } from 'react';
import { IPokemon } from '../../shared/types/pokemon';
import style from './style.module.scss';

export class PokemonCardImage extends Component<
  Pick<IPokemon, 'sprites' | 'name'>
> {
  render(): ReactNode {
    const {
      front_default,
      other: {
        dream_world: { front_default: dream_world_front_default },
        home: { front_default: home_front_default },
      },
    } = this.props.sprites;
    const src =
      dream_world_front_default || home_front_default || front_default;
    return (
      <img
        className={style.pokemonImg}
        src={src}
        alt={`Image of ${this.props.name}`}
      />
    );
  }
}
