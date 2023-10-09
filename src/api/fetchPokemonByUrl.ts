import { IPokemon } from '../shared/types/pokemon';

export async function fetchPokemonByUrl(url: string) {
  const response = await fetch(url);
  const pokemon: IPokemon = await response.json();
  return pokemon;
}
