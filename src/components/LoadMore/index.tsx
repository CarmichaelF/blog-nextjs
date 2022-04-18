import { usePagination } from '../../contexts/paginationContext';
import styles from './styles.module.scss';

export function LoadMore(): JSX.Element {
  const { page, setPage } = usePagination();

  const onClick = (): void => {
    setPage(page + 1);
  };

  return (
    <button onClick={onClick} type="button" className={styles.container}>
      Carregar mais posts
    </button>
  );
}
