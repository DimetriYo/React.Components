import { BeerFilterControls } from '../CharacterSearchControls';
import style from './styles.module.scss';
import { ContentWrapper } from '../../../components/ContentWrapper';
import { ErrorGeneratingBtn } from '../ErrorGeneratingBtn';

export function Header() {
  return (
    <div className={style.headerOuterWrapper}>
      <ContentWrapper>
        <div className={style.headerInnerWrapper}>
          <BeerFilterControls />
          <ErrorGeneratingBtn />
        </div>
      </ContentWrapper>
    </div>
  );
}
