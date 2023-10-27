import { TBeer } from '../../../data/types/beer';
import style from './style.module.scss';

export function BeerCard({ name, abv, ibu, image_url }: TBeer) {
  return (
    <div className={style.beerCard}>
      <img className={style.beerCard__img} src={image_url} alt={`Image of ${name} beer.`} />
      <h3>{name}</h3>
      <div>
        <div>Alcohol contents: {abv}</div>
        <div>Bitterness: {ibu}</div>
      </div>
    </div>
  );
}
