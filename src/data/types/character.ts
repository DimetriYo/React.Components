export type TCharacter = {
  id: number;
  name: string;
  status: 'Alive'| 'Dead'| 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
};
