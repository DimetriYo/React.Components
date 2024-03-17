import { TCharacter } from '../../types';
import style from './style.module.css';

export function CharacterCard({ name, image }: TCharacter) {
  return (
    <figure className={style.characterCard}>
      <img src={image} alt={`${name} photo`} />
      <figcaption className="text-center">{name}</figcaption>
    </figure>
  );
}
