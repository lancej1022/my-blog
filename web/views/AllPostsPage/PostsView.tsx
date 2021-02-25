import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

// TODO: rename BlogListVertical or make a second version that isnt just vertical
import { BlogListVertical } from 'components/BlogList';
import { PageLayout } from 'components/PageLayout';
import Post from 'types/post';

import styles from './PostsView.module.scss';

type Props = {
  allPosts: Post[];
};

const PostsView = ({ allPosts }: Props) => {
  return (
    <>
      <PageLayout title="All blog posts">
        <Container maxWidth="md" className={styles['posts-container']}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            All Blog Posts
          </Typography>
          <BlogListVertical posts={allPosts} />
        </Container>
      </PageLayout>
    </>
  );
};

export { PostsView };
