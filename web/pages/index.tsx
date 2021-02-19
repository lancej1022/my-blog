import MoreStories from 'components/more-stories';
import HeroPost from 'components/hero-post';
import { getAllPosts } from 'lib/api';
import Post from 'types/post';
import { Home } from 'views/Home';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Home />
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
