import { PostItem } from './PostItem';
import styles from './styles.module.scss';

export type Post = {
  id?: string;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
  first_publication_date: string;
};

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps): JSX.Element {
  return (
    <div className={styles.container}>
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
