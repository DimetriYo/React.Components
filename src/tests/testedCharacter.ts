import testImage from '../assets/nothingFound.png';
import { TCharacter } from '../types';

export const testedCharacter: TCharacter = {
  id: 12345,
  name: 'TestVasya',
  status: 'unknown',
  species: 'TestSpecies',
  type: '',
  gender: 'Test gender',
  origin: {
    name: 'Test Earth',
    url: 'https://TestLocation',
  },
  location: {
    name: 'Test location name',
    url: 'https://testLocationLink',
  },
  image: testImage,
  episode: ['https://testEpisode'],
  url: 'https://rickandmortyapi.com/api/character/1',
};
