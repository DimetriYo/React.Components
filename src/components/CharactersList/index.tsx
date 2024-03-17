// import { TCharacter } from '../../types';
import style from './style.module.css';

export function CharactersList() {
  // const charactersDataLength = characters.length;

  return (
    <div className={style.charactersList}>
      {/* {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
      {!charactersDataLength && <NothingFoundBackup />} */}
    </div>
  );
}
