import { TCharacter } from '../../types';
import { CharacterCard } from '../../pages/Landing/CharacterCard';
import { NothingFoundBackup } from '../../pages/Landing/NothingFoundBackup';
import style from './style.module.scss';

export function CharactersList({ characters }: { characters: TCharacter[] }) {
  const charactersDataLength = characters.length;

  return (
    <div className={style.charactersList}>
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
      {!charactersDataLength && <NothingFoundBackup />}
    </div>
  );
}
