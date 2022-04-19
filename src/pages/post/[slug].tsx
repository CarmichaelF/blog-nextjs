import { GetStaticPaths, GetStaticProps } from 'next';
import Header from '../../components/Header';

import { createClient } from '../../../prismicio';
import { PostType } from '../../components/PostList';
import PostBody from '../../components/PostBody';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps): JSX.Element {
  return (
    <div>
      <Header />
      <PostBody post={post} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({});

  const posts = (await client.getByType('publication')).results;
  const slugs = posts.map(post => {
    return { params: { slug: post.uid } };
  });
  return {
    paths: slugs,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params,
}) => {
  const { slug } = params;
  const client = createClient({ previewData });
  const post = await client.getByUID('publication', slug as string);

  return {
    props: { post }, // Will be passed to the page component as props
  };
};
