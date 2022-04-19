import { PrismicRichTextProps } from '@prismicio/react';
import { usePagination } from '../../contexts/paginationContext';
import { LoadMore } from '../LoadMore';
import { PostItem } from './PostItem';
import styles from './styles.module.scss';

export type PostType = {
  first_publication_date: string | null;
  id: string;
  slugs: string[];
  data: {
    title: string;
    subtitle: string;
    author: string;
    banner: {
      url: string;
      alt: string;
    };
    content: {
      heading: string;
      body: PrismicRichTextProps['field'];
    }[];
  };
};

interface PostListProps {
  posts: PostType[];
}

export function PostList({ posts }: PostListProps): JSX.Element {
  const { page, totalPages } = usePagination();
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
      {page < totalPages && <LoadMore />}
    </div>
  );
}
