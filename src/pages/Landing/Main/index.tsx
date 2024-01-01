import { ContentWrapper } from '../../../components/ContentWrapper';
import style from './style.module.scss';
import { TCharacter } from '../../../data/types/character';
import { CharacterCard } from '../CharacterCard';
import { NothingFoundBackup } from '../NothingFoundBackup';

export function Main({ charactersData }: { charactersData: TCharacter[] }) {
  const beersDataLength = charactersData.length;
  return (
    <div className={style.mainOuterWrapper}>
      <ContentWrapper>
        <div className={style.mainInnerWrapper}>
          {charactersData.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
          {!beersDataLength && <NothingFoundBackup />}
        </div>
      </ContentWrapper>
    </div>
  );
}
