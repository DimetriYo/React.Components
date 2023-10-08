import { POKEMONS_ON_PAGE } from '../../../constants';
import { IBasicPokemon } from '../../../shared/types/pokemon';

export function getPokemonsDataToShow({
  pokemonsData,
  limit = POKEMONS_ON_PAGE,
  offset = 0,
}: {
  pokemonsData: IBasicPokemon[];
  limit?: number;
  offset?: number;
}) {
  return pokemonsData.slice(offset, offset + limit);
}
