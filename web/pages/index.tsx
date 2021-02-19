import { getAllPosts } from 'lib/api';
import Post from 'types/post';
import { Home } from 'views/Home';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Home posts={allPosts} />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
