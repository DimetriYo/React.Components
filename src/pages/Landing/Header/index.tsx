import { BeerFilterControls } from '../BeerSearchControls';
import style from './styles.module.scss';
import { ContentWrapper } from '../../../components/ContentWrapper';
import { ErrorGeneratingBtn } from '../ErrorGeneratingBtn';

export function Header({ updateAppState }: { updateAppState: (searchTerm: string) => void }) {
  return (
    <div className={style.headerOuterWrapper}>
      <ContentWrapper>
        <div className={style.headerInnerWrapper}>
          <BeerFilterControls updateAppState={updateAppState} />
          <ErrorGeneratingBtn />
        </div>
      </ContentWrapper>
    </div>
  );
}
