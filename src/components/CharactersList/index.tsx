import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useCharacters } from '../../features/CharactersProvider';
import { CharacterCard } from '../CharacterCard';
import { NothingFound } from '../NothingFound';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export function CharactersList(props: Props) {
  const [characters] = useCharacters();

  return (
    <div {...props}>
      <div className="flex gap-4 flex-wrap items-center justify-center p-4">
        {characters.length ? (
          characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))
        ) : (
          <NothingFound />
        )}
      </div>
    </div>
  );
}
