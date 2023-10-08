import { Component, ReactNode } from 'react';
import { IBasicPokemon, IPokemon } from '../../shared/types/pokemon';
import { fetchPokemonByUrl } from '../../api/fetchPokemonByUrl';
import { PokemonCardImage } from '../PokemonCardImage';
import { PokemonCardInfo } from '../PokemonCardInfo';
import style from './style.module.scss';

export class PokemonCard extends Component<IBasicPokemon> {
  state: Readonly<{ pokemonData: IPokemon | null }> = { pokemonData: null };
  componentDidMount(): void {
    fetchPokemonByUrl(this.props.url).then((pokemonData) =>
      this.setState({ pokemonData })
    );
  }
  render(): ReactNode {
    return (
      <div className={style.pokemonCard}>
        {this.state.pokemonData && (
          <>
            <PokemonCardImage
              name={this.state.pokemonData.name}
              sprites={this.state.pokemonData.sprites}
            />
            <PokemonCardInfo
              name={this.state.pokemonData.name}
              height={this.state.pokemonData.height}
              weight={this.state.pokemonData.weight}
            />
          </>
        )}
      </div>
    );
  }
}
