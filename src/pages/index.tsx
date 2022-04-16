import { GetStaticProps } from 'next';
import { useState } from 'react';
import { createClient } from '../../prismicio';
import Header from '../components/Header';
import { Post, PostList } from '../components/PostList';

import common from '../styles/common.module.scss';

interface PostPagination {
  results: Post[];
  page: number;
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  // TODO
  const posts = postsPagination.results;
  const [page, setPage] = useState(postsPagination.page);

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  return (
    <div className={common.container}>
      <Header />
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const postsPagination = await client.getByType('publication', {
    // pageSize: 1,
  });

  return {
    props: { postsPagination }, // Will be passed to the page component as props
  };
};
