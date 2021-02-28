import Link from 'next/link';
import { Button, Container, Grid, Typography } from '@material-ui/core';

import { urlFor } from 'lib/api';
import { useResizeObserver } from 'hooks/useResizeObserver';
import PostType from 'types/post';
import styles from './PostHero.module.scss';

type PostHeroProps = {
  blogPost: PostType;
};

export function PostHero({ blogPost }: PostHeroProps) {
  // TODO: this is cool, but is it necessary? Can we just `useRef()` and grab the height of the slantyBoi?
  const { ref, height: slantyHeight = 270 } = useResizeObserver<HTMLDivElement>();

  // TODO: move this into a useStyles hook instead of cluttering component logic
  const backgroundImgStyle = {
    background: `radial-gradient(
      ellipse at center, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.65) 100%), 
      url(${urlFor(blogPost.coverImage)
        .height(450)
        .width(1920)
        .quality(90)
        .fit('crop')
        .url()}) no-repeat center center scroll`,
    backgroundSize: 'cover !important',
    height: slantyHeight + 130,
  };

  const featuredTextStyle = {
    margin: '0 0 0 1rem',
  };

  return (
    <Grid container alignContent="center" style={backgroundImgStyle} component="section">
      <Container maxWidth="md">
        <Grid ref={ref} className={styles['slanty-boi']}>
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
          <Typography
            color="textSecondary"
            className={styles['slanty-boi__title']}
            variant="h3"
            component="h2"
          >
            {blogPost.title}
          </Typography>
        </Grid>
        <Grid justify="flex-end" container className={styles['button-container']}>
          <Link href={`/posts/${blogPost.slug}`} passHref>
            <Button size="large" color="primary" variant="contained">
              Read Post
            </Button>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
}
