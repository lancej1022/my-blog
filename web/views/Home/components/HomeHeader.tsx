import { Container, Grid, Typography } from '@material-ui/core';
import { BlogListVertical } from 'components/BlogList/BlogListVertical';

import styles from '../Home.module.scss';

type HomeHeaderProps = {
  imageSrc?: string;
};

export const HomeHeader = ({ imageSrc }: HomeHeaderProps) => {
  return (
    <>
      <div className={styles['home__hero-container']}>
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h2" component="h1">
                Just a full-stack engineer writing about software.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              My picture will go here, wrapped within a Next/Image tag. It will not be
              larger than 300px.
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* TODO: the featured post will go below -- it may wind up meriting its own component to keep JSX + logic separated
      // will contain post Title
      // will render post coverImage (or at least a portion of it, maybe not full height)
      // see https://reacttraining.com/blog/ -- they dont use a dynamic cover image but overall this is the look to go for
      */}
    </>
  );
};
