import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { useEffect, useRef, useState } from 'react';
import { TCharacter } from '../../types';
import { fetchCharacterById } from '../../api/fetchCharacterById';
import { ContentLoader } from '../ContentLoader';

export function CharacterDetailCard() {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const clickCounterRef = useRef(0);
  const [details, setDetails] = useState<TCharacter>();
  const [isLoading, setIsLoading] = useState(true);

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
    if (!characterId) return;
    fetchCharacterById(characterId)
      .then((character) => setDetails(character))
      .finally(() => setIsLoading(false));
    window.addEventListener('click', handleClickWhenCardShown);

    return () => window.removeEventListener('click', handleClickWhenCardShown);
  }, []);

  useEffect(() => {
    if (!characterId) return;
    fetchCharacterById(characterId)
      .then(setDetails)
      .finally(() => setIsLoading(false));
  }, [characterId]);

  if (!details) return;
  const { name, image, gender } = details;

  return (
    <>
      {isLoading && <ContentLoader />}
      <div data-testid="details-card" className={style.wrapper} id="character-details">
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
    </>
  );
}
