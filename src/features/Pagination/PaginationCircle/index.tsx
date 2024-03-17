import style from './style.module.css';

type PaginationCircleProps = {
  index: string | null;
  onClick?: () => void;
  active?: boolean;
};

export function PaginationCircle({ index, onClick, active }: PaginationCircleProps) {
  return (
    <span
      onClick={onClick}
      className={`${style.circle} ${active ? style.circleActive : style.circleNormal}`}
    >
      {index}
    </span>
  );
}
