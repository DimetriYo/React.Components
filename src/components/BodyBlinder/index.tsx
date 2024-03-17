import { PropsWithChildren } from 'react';
import style from './style.module.css';

export function BodyBlinder({ children }: PropsWithChildren) {
  return <div className={style.bodyBlinder}>{children}</div>;
}
