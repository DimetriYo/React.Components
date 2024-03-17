import style from './style.module.css';

export function PaginationCircle({
  index,
  onClick,
}: {
  index: string | null;
  onClick?: () => void;
}) {
  return (
    <span onClick={onClick} className={style.circle}>
      {index}
    </span>
  );
}
