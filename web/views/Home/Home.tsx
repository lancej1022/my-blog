import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Post from 'types/post';
import { BlogListVertical } from 'components/BlogList';
import { PageLayout } from 'components/PageLayout';
import { PostHero } from 'components/PostHero';

import styles from './Home.module.scss';

type HomeProps = {
  posts: Post[];
};

export const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <PageLayout title="Home page of Lance Jeffers">
        <PostHero blogPost={posts[0]} />
        <Container maxWidth="md" className={styles['posts-container']}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Other Blog Posts
          </Typography>
          <BlogListVertical posts={posts.slice(1)} />
        </Container>
      </PageLayout>
    </>
  );
};
