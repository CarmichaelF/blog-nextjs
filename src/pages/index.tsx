import { usePrismicDocumentsByType } from '@prismicio/react';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { getByTypeOptions } from '../../config/prismicConfig';
import { createClient } from '../../prismicio';
import Header from '../components/Header';
import { Post, PostList } from '../components/PostList';
import { usePagination } from '../contexts/paginationContext';

import common from '../styles/common.module.scss';

interface PostPagination {
  results: Post[];
  page: number;
  total_pages: number;
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>(postsPagination.results);
  const { page, setPage, setTotalPages } = usePagination();
  const client = createClient({});

  useEffect(() => {
    setPage(postsPagination.page);
    setTotalPages(postsPagination.total_pages);
  }, [postsPagination]);

  useEffect(() => {
    if (page) {
      (async () => {
        const newPosts = (
          await client.getByType('publication', { ...getByTypeOptions, page })
        ).results as unknown;
        setPosts(newPosts as Post[]);
      })();
    }
  }, [page]);

  return (
    <div className={common.container}>
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const postsPagination = await client.getByType(
    'publication',
    getByTypeOptions
  );

  return {
    props: { postsPagination }, // Will be passed to the page component as props
  };
};
