import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { BlogListVertical } from 'components/BlogList';
import { PageLayout } from 'components/PageLayout';
import { PostHero } from 'components/PostHero';
import { HomeHeader } from './components/HomeHeader';

import styles from './Home.module.scss';

export const Home = ({ heroPost, morePosts }) => {
  return (
    <>
      <PageLayout title="Home page of Lance Jeffers">
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        {/* <HomeHeader /> */}
        <PostHero />
        <Container maxWidth="sm" className={styles['posts-container']}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Blog Posts
          </Typography>
          <BlogListVertical />
        </Container>
      </PageLayout>
    </>
  );
};
