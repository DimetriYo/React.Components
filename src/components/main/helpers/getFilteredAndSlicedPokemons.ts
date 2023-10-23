import { IBasicPokemon } from '../../../shared/types/pokemon';
import { getFilteredPokemonsData } from './getFilteredPokemonsData';
import { getPokemonsDataToShow } from './getPokemonsDataToShow';

export function getFilteredAndSlicedPokemons({
  pokemons: pokemonsData,
  searchQuery,
}: {
  pokemons: IBasicPokemon[];
  searchQuery: string;
}) {
  const filteredPokemons = getFilteredPokemonsData({
    pokemonsData,
    searchQuery,
  });
  const pokemonsToShow = getPokemonsDataToShow({
    pokemonsData: filteredPokemons,
  });
  return pokemonsToShow;
}
