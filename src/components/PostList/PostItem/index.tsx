import { FiCalendar, FiUser } from 'react-icons/fi';
import { Post } from '..';
import { formatDate } from '../../../utils.index';
import styles from './styles.module.scss';

export function PostItem({
  data: { title, subtitle, author },
  first_publication_date: date,
}: Post): JSX.Element {
  return (
    <article className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <div className={styles['bottom-section']}>
        <span className={styles['bottom-section__text']}>
          <FiCalendar size={20} />
          {formatDate(date)}
        </span>
        <span className={styles['bottom-section__text']}>
          <FiUser size={20} />
          {author}
        </span>
      </div>
    </article>
  );
}
