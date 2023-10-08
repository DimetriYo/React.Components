import { IBasicPokemon } from '../../../shared/types/pokemon';

export function getFilteredPokemonsData({
  pokemonsData,
  searchQuery = '',
}: {
  pokemonsData: IBasicPokemon[];
  searchQuery?: string;
}) {
  if (!searchQuery) return pokemonsData;
  return pokemonsData.filter((pokemon) => pokemon.name.includes(searchQuery));
}
