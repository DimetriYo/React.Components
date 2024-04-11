import { useCharacters } from '../../features/CharactersProvider';
import { CharacterCard } from '../CharacterCard';
import { NothingFound } from '../NothingFound';

export function CharactersList() {
  const characters = useCharacters();

  return (
    <div className="max-h-full overflow-y-scroll flex-grow basis-1/2">
      <div className="flex gap-4 flex-wrap items-center justify-center p-4">
        {characters.length ? (
          characters.map((character) => <CharacterCard key={character.id} {...character} />)
        ) : (
          <NothingFound />
        )}
      </div>
    </div>
  );
}
