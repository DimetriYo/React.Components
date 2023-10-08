import { IBasicPokemon } from '../shared/types/pokemon';

export type IPokemonResponse = {
  count: number;
  next: string | null;
  prev: string | null;
  results: IBasicPokemon[];
};
