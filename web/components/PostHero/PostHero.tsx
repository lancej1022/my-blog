import Link from 'next/link';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import styles from './PostHero.module.scss';

const defaultPost = {
  coverImageSrc: '/assets/unsplash-asoggetti.jpg',
  title: 'Super crazy blog post title',
  date: Date.now(),
  body:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt tempora eos doloribus natus? Impedit eligendi ea cupiditate delectus sit maiores.',
  slug: 'super-crazy-blog-post',
};

// see https://reacttraining.com/blog/ -- they dont use a dynamic cover image but overall this is the look to go for
export function PostHero({ post = defaultPost }) {
  const backgroundImgStyle = {
    background: `radial-gradient(
      ellipse at center, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.65) 100%), 
      url(${post.coverImageSrc}) no-repeat center center scroll`,
    backgroundSize: 'cover !important',
  };

  const featuredTextStyle = {
    margin: '0 0 0 1rem',
  };

  return (
    <Grid
      container
      alignContent="center"
      style={backgroundImgStyle}
      className={styles['post-container']}
      component="section"
    >
      <Container maxWidth="md">
        <Grid className={styles['slanty-boi']}>
          <Grid item className={styles['slanty-boi__featured-wrapper']}>
            <Typography
              variant="h5"
              component="h2"
              className={styles['slanty-boi__featured']}
              style={featuredTextStyle}
            >
              Featured Post
            </Typography>
          </Grid>
          <Typography className={styles['slanty-boi__title']} variant="h2" component="h3">
            {post.title}
          </Typography>
        </Grid>
        <Grid justify="flex-end" container className={styles['button-container']}>
          <Link href={`/posts/${post.slug}`} passHref>
            <Button size="large" color="primary" variant="contained">
              Read Post
            </Button>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
}
