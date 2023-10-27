import { useState } from 'react';
import style from './style.module.scss';

export function ErrorGeneratingBtn() {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleBurnInHellBtnClick = () => {
    setHasError(true);
  };

  if (hasError) {
    const burnInHellError = new Error('Burn m@$#%^&r! BUURN!!!11');
    throw burnInHellError;
  }

  return (
    <button className={style.errorGeneratingBtn} type="button" onClick={handleBurnInHellBtnClick}>
      Burn in Hell!!11
    </button>
  );
}
