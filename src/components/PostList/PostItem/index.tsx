import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { PostType } from '..';
import { formatDate } from '../../../utils.index';
import styles from './styles.module.scss';

export function PostItem({
  slugs,
  data: { title, subtitle, author },
  first_publication_date: date,
}: PostType): JSX.Element {
  return (
    <Link href={`/post/${slugs[0]}`} passHref>
      <a className={styles.container}>
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
      </a>
    </Link>
  );
}
