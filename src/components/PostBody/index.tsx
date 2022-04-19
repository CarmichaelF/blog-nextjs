/* eslint-disable react/no-array-index-key */
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import { PrismicRichText } from '@prismicio/react';
import { formatDate } from '../../utils.index';
import { PostType } from '../PostList';
import styles from './styles.module.scss';
import common from '../../styles/common.module.scss';
import { linkResolver } from '../../../prismicio';

interface PostBodyProps {
  post: PostType;
}

export default function PostBody({
  post: {
    data: { author, banner, content, title },
    first_publication_date: date,
  },
}: PostBodyProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={banner.url} alt={banner.alt} />
      <div className={common.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.bottom}>
          <span className={styles.bottom__text}>
            <FiCalendar size={20} />
            {formatDate(date)}
          </span>
          <span className={styles.bottom__text}>
            <FiUser size={20} />
            {author}
          </span>
          <span className={styles.bottom__text}>
            <FiClock size={20} />4 min
          </span>
        </div>
        <div className={styles.content}>
          {content?.map((item, index) => {
            return (
              <div className={styles.content__item} key={index}>
                <h2>{item.heading}</h2>
                <PrismicRichText
                  field={item.body}
                  linkResolver={linkResolver}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
