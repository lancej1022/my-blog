import { getAllPosts } from 'lib/api';
import Post from 'types/post';
import { PostsView } from 'views/AllPostsPage';

type Props = {
  allPosts: Post[];
};

const AllPosts = ({ allPosts }: Props) => {
  return (
    <>
      <PostsView allPosts={allPosts} />
    </>
  );
};

export default AllPosts;

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'content',
  ]);

  return {
    props: { allPosts },
  };
};
