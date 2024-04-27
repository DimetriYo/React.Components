export type TCharacter = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
};

export type TResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: TCharacter[];
};

export type TAppState = {
  characters: TCharacter[];
  totalPagesCount: number;
};

export type SearchParams = { searchTerm?: string; page?: string };

export type CharacterNotFoundResponse = {
  error: 'Character not found';
};
