import { TCharacter } from '../../../types';
import style from './style.module.scss';

export function CharacterCard({ name, image }: TCharacter) {
  return (
    <div className={style.beerCard}>
      <img className={style.beerCard__img} src={image} alt={`Image of ${name}.`} />
      <h3>{name}</h3>
    </div>
  );
}
