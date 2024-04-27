import { Link, useLocation } from 'react-router-dom';
import { TCharacter } from '../../types';
import style from './style.module.css';

export function CharacterCard({ name, image, id }: TCharacter) {
  const { search } = useLocation();

  return (
    <Link to={{ pathname: `${id}`, search }}>
      <figure data-character-card className={style.characterCard}>
        <img src={image} alt={`${name} photo`} />
        <figcaption data-testid="character-name" className="text-center">
          {name}
        </figcaption>
      </figure>
    </Link>
  );
}
