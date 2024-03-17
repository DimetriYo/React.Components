import { useCharacters } from '../../features/CharactersProvider';
import { CharacterCard } from '../CharacterCard';
import style from './style.module.css';

export function CharactersList() {
  const characters = useCharacters();

  return (
    <div className={style.charactersList}>
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </div>
  );
}
