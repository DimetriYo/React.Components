import { Component } from 'react';
import { IPokemon } from '../../shared/types/pokemon';
import style from './style.module.scss';

export class PokemonCardInfo extends Component<
  Pick<IPokemon, 'name' | 'height' | 'weight'>
> {
  render() {
    return (
      <div className={style.pokemonCardInfo}>
        <h3>{this.props.name}</h3>
        <p>Height: {this.props.height}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}
