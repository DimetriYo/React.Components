import { PropsWithChildren } from 'react';
import style from './style.module.css';

export function ContentWrapper({ children }: PropsWithChildren) {
  return <div className={style.contentWrapper}>{children}</div>;
}
