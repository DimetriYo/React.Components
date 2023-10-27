import { PropsWithChildren } from 'react';
import style from './style.module.scss';

export function BodyBlinder({ children }: PropsWithChildren) {
  return <div className={style.bodyBlinder}>{children}</div>;
}
