import testImage from '../assets/nothingFound.png';
import { TCharacter } from '../types';

function characterFactory(): () => TCharacter {
  let testCharId = 10000;

  return () => {
    return {
      id: testCharId++,
      name: `Test Character Name${testCharId}`,
      status: getRandomCharacterStatus(),
      species: `TestSpecies${testCharId}`,
      type: '',
      gender: `Test gender ${testCharId}`,
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
  };
}

export const getTestChar = characterFactory();

function getRandomCharacterStatus(): TCharacter['status'] {
  const rand = Math.random();
  return rand < 0.3 ? 'unknown' : rand < 0.6 ? 'Alive' : 'Dead';
}
