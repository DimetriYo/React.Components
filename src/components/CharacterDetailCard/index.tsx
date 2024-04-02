import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useCharacters } from '../../features/CharactersProvider';
import style from './style.module.css';
import { useEffect, useRef } from 'react';

export function CharacterDetailCard() {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const characterNumber = Number(characterId);
  const characters = useCharacters();
  const detailedCharacter = characters.find(({ id }) => characterNumber === id);
  const clickCounterRef = useRef(0);

  const hideDetails = () => {
    navigate({ pathname: '/', search: location.search });
  };

  const handleClickWhenCardShown = (e: MouseEvent) => {
    if (e.target === null) return;
    clickCounterRef.current++;
    const isOpenCardClick = !!(e.target as HTMLElement).closest('#character-details');
    const isNewCardClick = !!(e.target as HTMLElement).closest('[data-character-card]');
    if (!isOpenCardClick && !isNewCardClick && clickCounterRef.current > 1) hideDetails();
  };

  useEffect(() => {
    window.addEventListener('click', handleClickWhenCardShown);

    return () => window.removeEventListener('click', handleClickWhenCardShown);
  }, []);

  if (!detailedCharacter) return null;
  const { name, image, gender } = detailedCharacter;

  return (
    <div className={style.wrapper} id="character-details">
      <button
        onClick={hideDetails}
        className="absolute top-4 left-4 px-2 bg-blue-200 rounded-md border-2 border-solid border-slate-700 hover:bg-blue-600"
      >
        Close
      </button>
      <div className="flex flex-col gap-3 text-lg">
        <img
          src={image}
          className="rounded-3xl border-2 border-solid border-purple-600"
          alt={`${name} photo`}
        />
        <div>
          Name: <b>{name}</b>
        </div>
        <div>
          Gender: <b>{gender}</b>
        </div>
      </div>
    </div>
  );
}
